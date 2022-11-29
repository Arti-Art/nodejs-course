# Node is using a single thread > how can it handle multiple requests?
The event loop starts when your program starts.
The event loop handles callbacks (fast finishing code).
Longer operations, like writing to fs are sent to a "worker pool" (also managed by node)
The Worker Pool can run on multiple threads.
Once the worker is done (has read a file for ex) it will trigger the callback for that readFile operation, which is handled by the event loop.

# Event Loop
1. it checks if there are any timer callbacks it should execute (setTimeout or setInterval)
2. it checks for any pending callbacks (ex: for writeFile or ReadFile)
  - Node will leave this phase after a certain amount of time, so, if there are still some outstanding callbacks, it will continue its loop iteration and postpone these callbacks to the next iteration.
3. it enters the Poll Phase
  - Node looks for new I/O events (input/output, disk & network operations) and executes their callbacks immediately if possible.
  - If not possible, it will register them as pending callbacks.
  - Will check again if any timer callbacks need to be executed, and if yes, jump back to the timers phase of the loop
4. Check (execute setImmediate() callbacks)
5. Close callbacks (execute all 'close' event callbacks) - no need to know that part
6. We might exit the whole node process, but only if there are no remaining event handlers which are registered

**Summary:**
- timers
- pending callbacks (previously postponed callbacks)
- poll
- check
- 'close' callbacks
- (exiting the process if no more event handlers)