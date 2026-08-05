---
title: "SaveableSandBoxTypeDefiner"
description: "The v1.4.5 SandBox save-definition module whose reserved base ID currently has no additional type registrations."
---
# SaveableSandBoxTypeDefiner

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class SaveableSandBoxTypeDefiner : SaveableTypeDefiner`  
**Source:** `Modules.SandBox/SandBox/Sandbox/SaveableSandBoxTypeDefiner.cs`

## Responsibility

`SaveableSandBoxTypeDefiner` is the SandBox module's extension point into the global save definition context. In v1.4.5 its constructor reserves save base ID `33231`, and every definition hook that this class overrides is empty: it adds no class, struct, enum, interface, generic, or container definitions. Its current behavior is therefore registration of an identity with no extra SandBox-owned types, not a hidden catalog of save classes.

## Mental model: a definition provider, not a save manager

The save system has a definition phase before object traversal:

```text
SandBoxSubModule.OnNewModuleLoad
  -> SaveManager.InitializeGlobalDefinitionContext()
  -> scan loaded SaveableTypeDefiner instances
  -> initialize each definer
  -> call definition hooks
  -> Save/Load can resolve stable type IDs
```

`SaveableSandBoxTypeDefiner` participates in that phase through [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner). It does not own `SyncData` keys, read save files, or decide whether a save is compatible.

## Source-defined surface

```csharp
public SaveableSandBoxTypeDefiner() : base(33231)
{
}

protected override void DefineClassTypes() { }
protected override void DefineStructTypes() { }
protected override void DefineEnumTypes() { }
protected override void DefineInterfaceTypes() { }
protected override void DefineGenericClassDefinitions() { }
protected override void DefineGenericStructDefinitions() { }
protected override void DefineContainerDefinitions() { }
```

The empty overrides are meaningful. There is no v1.4.5 type registration to document under this class, and adding a guessed type list would misrepresent the source.

## Base ID and compatibility

The base class combines the definer's base ID with local IDs when it creates type definitions. `33231` is therefore part of SandBox's save protocol. A mod should not reuse it, change it, or add unrelated definitions to this class. A mod-owned `SaveableTypeDefiner` needs its own stable, non-conflicting base range and should retain each local ID once a save may contain that type.

The global context is rebuilt by `SaveManager.InitializeGlobalDefinitionContext()`, which `SandBoxSubModule.OnNewModuleLoad` calls. That initialization is not a migration mechanism: changing an ID after release can make old object graphs resolve to a different type or fail to load.

## Dependencies and boundaries

- [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) supplies the protected definition APIs and combines the base ID with local IDs.
- [SaveManager](../../save-system/SaveManager) discovers this definer while building the global definition context.
- [SandBoxSubModule](../SandBoxSubModule) triggers that context initialization on a module-load boundary.

## Real host path

The relevant source path is a single host call, not an application-level constructor call:

```csharp
protected override void OnNewModuleLoad()
{
    SaveManager.InitializeGlobalDefinitionContext();
}
```

The save system discovers the concrete definer while filling the global context. Do not instantiate `SaveableSandBoxTypeDefiner` in a campaign behavior to "register" it; that bypasses the context lifecycle and does not perform a complete definition scan.

## What to use instead

- For a campaign behavior's scalar or stable object state, implement `SyncData(IDataStore)` and keep keys and value types stable.
- For a new reachable object type, create a separate mod-owned `SaveableTypeDefiner` and add definitions with the protected base-class APIs after choosing a unique ID range.
- For load admission, module comparison, corrupted-save messaging, and `LoadResult`, use [SandBoxSaveHelper](../SandBoxSaveHelper).
- For the actual save/load traversal and driver handoff, read [SaveManager](../../save-system/SaveManager).

## Risks and save boundaries

- An attribute or an empty definer does not make an arbitrary object graph serializable. Every reachable custom type and container needs a valid definition where the save system requires one.
- The numeric base and local IDs are persisted protocol identifiers. Do not use auto-incremented or reused IDs in a released mod.
- Definition initialization must happen before save traversal. Calling the diagnostic or adding definitions from a late campaign callback can leave a context that does not match the active save operation.
- This class contains no campaign state and should not be treated as a place to store configuration, runtime handles, missions, agents, delegates, or UI view models.

## Version note

The empty hook set and base ID `33231` are v1.4.5 facts. A future SandBox build may add registrations or change its ID allocation; re-read the source before relying on the current no-op behavior.

## Navigation

- Parent: [Campaign extension API](../)
- Siblings: [SandBoxSaveManager](../SandBoxSaveManager) · [SandBoxSaveHelper](../SandBoxSaveHelper) · [SandBoxSubModule](../SandBoxSubModule)
- Related: [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) · [SaveManager](../../save-system/SaveManager) · [IDataStore](../../campaign/IDataStore) · [LoadResult](../../save-system/LoadResult)
- Chinese/English: [中文页面](../../../../zh/api/campaign-ext/SaveableSandBoxTypeDefiner)
