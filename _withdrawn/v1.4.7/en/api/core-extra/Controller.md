---
title: "Controller"
description: "Controller — class in TaleWorlds.DotNet. 3 public members (3 static)."
---

<!-- v147-skeleton -->
# Controller

**Namespace:** `TaleWorlds.DotNet`  
**Module:** `TaleWorlds.DotNet`  
**Type:** `public static class Controller`  
**Source:** `TaleWorlds.DotNet/Controller.cs`

## Overview

`Controller` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Static entry points** (3): `SetEngineMethodsAsMono`, `SetEngineMethodsAsHostedDotNetCore`, `SetEngineMethodsAsDotNet`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetEngineMethodsAsDotNet` | method (static) | Static entry point. Takes 3 arguments: `Delegate passControllerMethods`, `Delegate passManagedInitializeMethod`, `Delegate passManagedCallbackMethod`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetEngineMethodsAsHostedDotNetCore` | method (static) | Static entry point. Takes 3 arguments: `IntPtr passControllerMethods`, `IntPtr passManagedInitializeMethod`, `IntPtr passManagedCallbackMethod`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetEngineMethodsAsMono` | method (static) | Static entry point. Takes 3 arguments: `IntPtr passControllerMethods`, `IntPtr passManagedInitializeMethod`, `IntPtr passManagedCallbackMethod`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyController : CampaignBehaviorBase
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}

// Static helpers: Controller.SetEngineMethodsAsMono(passControllerMethods, passManagedInitializeMethod, passManagedCallbackMethod);
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- The declaration in `TaleWorlds.DotNet/Controller.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
