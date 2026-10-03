---
title: "AgentVisualsCreator"
description: "The three-line IAgentVisualCreator implementation whose only job is to call AgentVisuals.Create with random progress forced off."
---

# AgentVisualsCreator

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `Modules.Native` — the view layer
**Type:** `public class AgentVisualsCreator : IAgentVisualCreator`
**Base:** `object`; implements `IAgentVisualCreator`
**Source:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisualsCreator.cs`

## One-line responsibility

It is a one-method adapter that turns the four-argument `IAgentVisualCreator.Create` into the five-argument `AgentVisuals.Create`, pinning one of those arguments.

## Mental model

The whole class is this:

```csharp
public IAgentVisual Create(AgentVisualsData data, string name, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)
{
    return (IAgentVisual)(object)AgentVisuals.Create(data, name, isRandomProgress: false, needBatchedVersionForWeaponMeshes, forceUseFaceCache);
}
```

That is the entire type, and the one design fact worth taking away is the `isRandomProgress: false`. The static factory takes five parameters; the interface takes four. This adapter exists to absorb that difference, and it resolves it by always disabling random animation progress. A visual created through the interface always starts its action at progress zero; only a caller using the static `AgentVisuals.Create` directly can opt into a random start.

Two things about the shape are worth noticing before you write your own implementation. First, the double cast `(IAgentVisual)(object)` — it is redundant, since `AgentVisuals` implements `IAgentVisual` and a single cast would compile. That it is written this way is a small fingerprint of code that has been through decompilation and reassembly. Second, the class is **not** `sealed` and has **no** constructor, so it is instantiable and inheritable; a mod can implement its own `IAgentVisualCreator` and swap it onto `Mission.AgentVisualCreator`, which is the extension point that makes this type worth a page at all.

The `Mission.AgentVisualCreator` field it is designed to fill is declared on `Mission` itself, as a public `IAgentVisualCreator` field rather than a property. That means it is **writable**, and swapping it is the supported way to take over visual creation for a mission.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Create` | `public IAgentVisual Create(AgentVisualsData data, string name, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)` | The only member. Delegates to `AgentVisuals.Create` with `isRandomProgress: false` hard-wired, and returns the result as `IAgentVisual`. The two pass-through booleans — batched weapon meshes and forced face-cache use — are forwarded untouched, so this adapter narrows only the animation-progress choice. |
| `IAgentVisualCreator` (implemented) | `interface IAgentVisualCreator` with the single `Create` method above | The contract, declared in `TaleWorlds.MountAndBlade` rather than the view assembly. Implementing it means taking four arguments instead of five, which is the whole reason this class exists. |
| `Mission.AgentVisualCreator` (host field) | `public IAgentVisualCreator AgentVisualCreator;` | The slot this type fills, declared at `Mission.cs:1000`. It is a **public field, not a property**, so assignment is the supported replacement route: set it before anything asks the mission to build a visual. |

## Real example

Installing a replacement creator onto a mission, which is the reason the type exists as a separate class:

```csharp
public class MyCreatorInstaller : MissionLogic
{
    public override void OnBehaviorInitialize()
    {
        this.Mission.AgentVisualCreator = new MyLoggingVisualCreator(this.Mission.AgentVisualCreator);
    }
}
```

A wrapping implementation that keeps the original and observes what it is asked for:

```csharp
public class MyLoggingVisualCreator : IAgentVisualCreator
{
    private readonly IAgentVisualCreator _inner;

    public MyLoggingVisualCreator(IAgentVisualCreator inner)
    {
        this._inner = inner;
    }

    public IAgentVisual Create(
        AgentVisualsData data,
        string name,
        bool needBatchedVersionForWeaponMeshes,
        bool forceUseFaceCache)
    {
        Debug.Print("creating visual " + name + " forceUseFaceCache=" + forceUseFaceCache, 0);
        return this._inner.Create(data, name, needBatchedVersionForWeaponMeshes, forceUseFaceCache);
    }
}
```

The wrapper must reproduce the same four-argument signature. That is the constraint this page exists to explain: a creator cannot ask for random action progress, because the interface has no parameter for it and the shipped implementation hard-codes it to `false`.

Using the shipped implementation directly, without installing anything:

```csharp
public class MyDirectVisual
{
    public IAgentVisual Build(AgentVisualsData data)
    {
        return new AgentVisualsCreator().Create(
            data,
            "my_direct_visual",
            needBatchedVersionForWeaponMeshes: false,
            forceUseFaceCache: true);
    }
}
```

Instantiating the shipped creator is legal — it has an implicit public parameterless constructor — but assigning it to `Mission.AgentVisualCreator` is pointless unless you have already replaced the default, since the default is already this behaviour.

## Risks and boundaries

1. **`isRandomProgress` is forced to `false`.** Going through `IAgentVisualCreator` means animations always start at progress zero. If you need a randomised start you must call the static `AgentVisuals.Create` yourself and bypass the interface.
2. **`Mission.AgentVisualCreator` is a field, not a property.** It is publicly writable with no validation and no event. Replacing it mid-mission changes who builds subsequent visuals with no notification.
3. **No interface-level validation.** The implementation passes `data` straight through. A null `AgentVisualsData` is not checked here; what happens is `AgentVisuals.Create`'s problem, not this adapter's.
4. **Crosses the native boundary via its callee.** This class holds no native handle of its own, but everything it returns does. The lifetime rules from [`AgentVisuals`](./AgentVisuals) apply to the object it hands back, not to this adapter.
5. **Module boundary.** It lives in `Modules.Native` under `TaleWorlds.MountAndBlade.View`, while the interface it implements lives in `TaleWorlds.MountAndBlade`. That split is why the adapter is necessary — the view assembly cannot be referenced from the core assembly, so the indirection is what lets core code hold a creator without knowing about the view layer.
6. **The redundant double cast is real.** `(IAgentVisual)(object)` works but a single cast compiles equally well. Do not copy the pattern into your own code; write `return AgentVisuals.Create(...)` and let the implicit conversion happen.
7. **Nothing here is saved.** A creator is a live collaborator on a mission object and has no persistence.

## Dependencies

- **Interface:** [`IAgentVisualCreator`](../IAgentVisualCreator) is declared in `TaleWorlds.MountAndBlade` and defines the single `Create` method this class implements.
- **Callee:** [`AgentVisuals`](./AgentVisuals) `Create(AgentVisualsData, string, bool, bool, bool)` is the five-argument static factory; this adapter is the four-argument shim over it.
- **Return type:** [`IAgentVisual`](../IAgentVisual) is what both the interface and the returned object speak.
- **Configuration:** [`AgentVisualsData`](./AgentVisualsData) is the first argument, forwarded without inspection.
- **Installation point:** [`Mission`](../../mission/Mission) declares the public `AgentVisualCreator` field this type fills.
- Bucket home: [mission-ext API section](../)