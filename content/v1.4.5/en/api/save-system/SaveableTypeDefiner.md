---
title: "SaveableTypeDefiner"
description: "The auto-discovery entry point for the save definition context: it assigns stable SaveIds to types, root objects, generic containers, and compatibility migrations."
---

# SaveableTypeDefiner

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public abstract class SaveableTypeDefiner`  
**Base:** none  
**File:** `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`

## Overview

`SaveableTypeDefiner` adds the types owned by an assembly/module into the save system's `DefinitionContext`. It does not save instance data, nor does it replace [IDataStore](../../campaign/IDataStore). It defines "how a type is recognized, which numbers its members use, and how containers are built", and [SaveManager](../SaveManager) uses those definitions when saving/loading.

## Mental Model

Each definer is a stable save-schema table:

1. The constructor supplies the module-wide `saveBaseId`.
2. The override methods `DefineClassTypes`, `DefineStructTypes`, `DefineEnumTypes`, and so on declare types.
3. Helpers like `AddClassDefinition(typeof(T), saveId)` finally write into the definition context using `saveBaseId + saveId`.
4. The [SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute) on members then provide the type-internal `LocalSaveId`.

So `saveBaseId`/`saveId` and the member `LocalSaveId` are all compatibility contracts. A mod can define several classes in one definer, but it must not assign the numbers randomly on each startup.

## Auto-Discovery and Fixed Phases

`DefinitionContext.FillWithCurrentTypes()` only collects the SaveSystem assembly and the assemblies that reference it; it is not an unconditional scan of every current assembly. It creates non-abstract definers with a parameterless constructor, then calls every definer in phases, in this order:

1. `Initialize(context)`.
2. `DefineBasicTypes`, `DefineClassTypes`, `DefineStructTypes`, `DefineInterfaceTypes`, `DefineEnumTypes`, `DefineRootClassTypes`.
3. `DefineGenericStructDefinitions`, `DefineGenericClassDefinitions`, `DefineContainerDefinitions`, `DefineConflictResolvers`.
4. Collect each type's initialization callbacks, `[SaveableProperty]` and `[SaveableField]`, then aggregate errors.

Therefore a container's element, key, and value types must already be defined before this; `Define*` only builds tables and should not touch `Campaign.Current`, create Heroes, or fire events.

## Real Native Pattern

In 1.4.5 source, `SaveableObjectSystemTypeDefiner` uses `base(10000)`, adds `MBGUID` in `DefineBasicTypes`, and calls `AddClassDefinition(typeof(MBObjectBase), 34)` in `DefineClassTypes`. `SaveableLocalizationTypeDefiner` uses `base(20000)`, registers `TextObject`, and builds the `Dictionary<string, TextObject>` container. This shows a definer covers basic types, classes, and containers at once, not just Attribute-marked fields.

## When to Use / When Not to Use

**Use:** when adding a custom class, struct, enum, interface, basic type, or generic container that will enter the `SaveManager` object graph; especially together with [SaveableFieldAttribute](../SaveableFieldAttribute) / [SaveablePropertyAttribute](../SaveablePropertyAttribute).

**Do not use:** creating a definer just for a few fields of a `CampaignBehaviorBase` — that should use [IDataStore](../../campaign/IDataStore). Nor register `MBObjectManager`'s XML object types with it — that is the `RegisterType<T>` contract of [MBObjectManager](../../campaign-ext/MBObjectManager).

## Key Extension Points

| Method | Role |
| --- | --- |
| `DefineBasicTypes()` | Register basic types and serializers via `AddBasicTypeDefinition` |
| `DefineClassTypes()` | Register ordinary reference types via `AddClassDefinition` |
| `DefineRootClassTypes()` | Register the save-graph root class via `AddRootClassDefinition` |
| `DefineStructTypes()` / `DefineEnumTypes()` / `DefineInterfaceTypes()` | Register value types, enums, and interface definitions |
| `DefineGenericClassDefinitions()` / `DefineGenericStructDefinitions()` | Build generic definitions via `ConstructGeneric...` |
| `DefineContainerDefinitions()` | Register containers like `List<T>`, `Dictionary<TKey,TValue>` via `ConstructContainerDefinition` |
| `DefineConflictResolvers()` | Declare compatibility conflict handling via `AddConflictResolver` |

## Real Example: the Native Localization Definer

```csharp
public class SaveableLocalizationTypeDefiner : SaveableTypeDefiner
{
    public SaveableLocalizationTypeDefiner() : base(20000) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(TextObject), 1);
    }

    protected override void DefineContainerDefinitions()
    {
        ConstructContainerDefinition(typeof(Dictionary<string, TextObject>));
    }
}
```

This is the real 1.4.5 declaration: `base(20000)` and the type-local id `1` together form the type SaveId; the concrete dictionary shape is registered separately by `ConstructContainerDefinition`. The definition context is built by [SaveManager](../SaveManager) at module init; mods should not `new` this definer manually. The native [SaveableCampaignTypeDefiner](../../campaign/SaveableCampaignTypeDefiner) uses the same pattern and registers Campaign types with `base(330000)`.

The engine collects and fills all definers during save-system init (mods should not instantiate this definer themselves):

```csharp
SaveManager.InitializeGlobalDefinitionContext();
List<Type> missingTypes = SaveManager.CheckSaveableTypes();
```

## Risks and Save Protection

- **`saveBaseId` collision.** The helper actually adds the base and local numbers; two overlapping module ranges produce the same type save id, causing a definition conflict or wrong parse. Reserve a clear range for your mod and keep it fixed.
- **Changing the local `saveId`.** The `1` in `AddClassDefinition(typeof(T), 1)` is also the persistent type identity; do not reorder it casually after release.
- **Missing container definition.** A field type may be a `List<T>` or dictionary; without a matching container definition, the `DefinitionContext`/`SaveManager` check reports an undefined type.
- **Treating the Attribute as auto-registration.** Marking a field/property alone does not generate a class definition; likewise, the definer will not add your class to `MBObjectManager`'s XML type table for you.
- **Changing a signature without considering old saves.** Deleting a class, changing a field type, changing `LocalSaveId`, or swapping a resolver all affect old saves; you need a compatible resolver, or new-version members and a migration strategy.
- **Running game logic in the definition phase.** `Define...` methods are for building tables and should not touch `Campaign.Current`, create Heroes, or fire events; those objects may not be initialized yet.

- **Misreading the load order.** `SaveManager.Load` rebuilds the current-version definition table; `LoadContext` first creates objects, resolves references, fills fields/properties, then runs init and late-init callbacks. Fields may be filled in parallel across objects, so you cannot read complete state in a constructor or an over-eager event.

- **Misusing the resolver as a renumbering tool.** `DefineConflictResolvers` should only provide migration maps for clearly old version type ids; a wrong resolver sends old data into the wrong type.

## Cross-Version Notes

Both 1.3.15 and 1.4.5 provide the same base-class helpers and phase overrides. An official module's `saveBaseId`, type-local numbers, and type list may grow across versions; a mod should treat its own numbers as a permanent contract and not copy an official range from some version.

## Dependencies

- Member declaration: [SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveablePropertyAttribute](../SaveablePropertyAttribute).
- Execution entry: [SaveManager](../SaveManager) builds the [DefinitionContext](../DefinitionContext) and reports definition errors.
- Behavior's other route: [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) and [IDataStore](../../campaign/IDataStore).
- Object registration's other route: [MBObjectManager](../../campaign-ext/MBObjectManager).

## See Also

- Parent: [save-system API](../)
- Sibling: [SaveManager](../SaveManager) · [SaveableFieldAttribute](../SaveableFieldAttribute)
- Related: [ContainerDefinition](../ContainerDefinition) · [IConflictResolver](../IConflictResolver) · [Save and Crash Boundaries](../SaveManager)
