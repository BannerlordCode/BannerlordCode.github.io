---
title: "SaveableTypeDefiner"
description: "The abstract bridge from saveable members to DefinitionContext: define types, members, containers, and compatibility resolvers."
---
# SaveableTypeDefiner

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public abstract class SaveableTypeDefiner`
**Base:** none
**File:** `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs` (semantics checked against 1.4.5 source)

## Responsibility

`SaveableTypeDefiner` adds a module's types to the save system's `DefinitionContext`. It does not store instance data and does not replace [IDataStore](../../campaign-ext/IDataStore). It defines how types are identified, which members exist, and how containers are constructed; [SaveManager](../SaveManager) consumes those definitions during save/load.

## Mental model

Treat a definer as a stable save-schema table:

1. Its constructor supplies a module-scoped `saveBaseId`.
2. `DefineClassTypes`, `DefineStructTypes`, `DefineEnumTypes`, and related overrides declare types.
3. Helpers such as `AddClassDefinition(typeof(T), saveId)` write `saveBaseId + saveId` into the definition context.
4. [SaveableFieldAttribute](../SaveableFieldAttribute) and [SaveablePropertyAttribute](../SaveablePropertyAttribute) provide type-local `LocalSaveId` values for members.

The base ID, local type ID, and member local IDs are all compatibility contracts. One mod can define multiple classes in one definer, but it must not allocate numbers randomly per startup.

## Auto-discovery and fixed stages

`DefinitionContext.FillWithCurrentTypes()` collects the SaveSystem assembly and assemblies that reference it; it is not an unconditional scan of every loaded assembly. It constructs each non-abstract definer through a parameterless constructor, then runs all definers in these stages:

1. `Initialize(context)`.
2. `DefineBasicTypes`, `DefineClassTypes`, `DefineStructTypes`, `DefineInterfaceTypes`, `DefineEnumTypes`, and `DefineRootClassTypes`.
3. `DefineGenericStructDefinitions`, `DefineGenericClassDefinitions`, `DefineContainerDefinitions`, and `DefineConflictResolvers`.
4. Collect initialization callbacks, `[SaveableProperty]`, and `[SaveableField]` members, then aggregate errors.

Element, key, and value types must therefore be defined before `DefineContainerDefinitions`. Definition methods build a table; they should not access `Campaign.Current`, create Heroes, or fire events.

## Official source pattern

In 1.4.5, `SaveableObjectSystemTypeDefiner` uses `base(10000)`, adds `MBGUID` with `AddBasicTypeDefinition` in `DefineBasicTypes`, and registers `MBObjectBase` with `AddClassDefinition(typeof(MBObjectBase), 34)`. `SaveableLocalizationTypeDefiner` uses `base(20000)`, registers `TextObject`, and constructs `Dictionary<string, TextObject>`. A definer therefore covers basic types, classes, and containers, not merely classes that carry Attributes.

## When to use / when not to use

Use it when a custom class, struct, enum, interface, basic type, or generic container must be part of `SaveManager`'s object graph, especially when paired with [SaveableFieldAttribute](../SaveableFieldAttribute) or [SaveablePropertyAttribute](../SaveablePropertyAttribute).

Do not create a definer just for a few `CampaignBehaviorBase` fields; use [IDataStore](../../campaign-ext/IDataStore) there. Do not use it to register XML object types; that is `MBObjectManager.RegisterType<T>` in [MBObjectManager](../../campaign-ext/MBObjectManager).

## Key extension points

| Method | Role |
| --- | --- |
| `DefineBasicTypes()` | register basic types and serializers with `AddBasicTypeDefinition` |
| `DefineClassTypes()` | register reference types with `AddClassDefinition` |
| `DefineRootClassTypes()` | register save-graph roots with `AddRootClassDefinition` |
| `DefineStructTypes()` / `DefineEnumTypes()` / `DefineInterfaceTypes()` | define value, enum, and interface types |
| `DefineGenericClassDefinitions()` / `DefineGenericStructDefinitions()` | construct generic definitions through `ConstructGeneric...` |
| `DefineContainerDefinitions()` | construct `List<T>`, `Dictionary<TKey,TValue>`, and other containers |
| `DefineConflictResolvers()` | add compatibility conflict handling with `AddConflictResolver` |

## Real example: native localization definer

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

This is a real 1.4.5 declaration: `base(20000)` and local type ID `1` form the type SaveId, while the concrete dictionary shape is registered separately. The module calls [SaveManager](../SaveManager) to build the context; a mod should not manually construct this definer. Native [SaveableCampaignTypeDefiner](../../campaign-ext/SaveableCampaignTypeDefiner) follows the same pattern with `base(330000)`.

`saveBaseId + local save id` is a type ID; a field's `LocalSaveId` forms a separate `MemberTypeId`. Both layers must remain stable after release.

## Risks and crash boundaries

- **`saveBaseId` collision.** Helpers add the base and local number. Overlapping module ranges produce duplicate type save IDs and definition conflicts. Reserve and keep a clear range for the mod.
- **Changing local type IDs.** The `1` in `AddClassDefinition(typeof(T), 1)` is also persistent type identity. Do not reorder it for cosmetic reasons after release.
- **Missing container definitions.** A field can be a `List<T>` or dictionary; without the matching container definition, `DefinitionContext`/`SaveManager` checks report an undefined type.
- **Attributes are not auto-registration.** Marking a field/property does not generate a class definition, and a definer does not add a type to `MBObjectManager`'s XML registry.
- **Signature changes affect old saves.** Removing a class, changing a member type, changing `LocalSaveId`, or changing a resolver can break old saves. Add a compatibility resolver or a versioned member and migration path.
- **No gameplay in definition methods.** `Define...` methods build tables. Do not access `Campaign.Current`, create Heroes, or fire events while those systems may still be uninitialized.

### Load order

`SaveManager.Load` rebuilds the current definition context first. `LoadContext` then creates objects and containers, resolves references, fills fields and properties, and only afterwards runs initialization and late-initialization callbacks. Do not read a graph as complete from a definer or constructor; use the appropriate load callback or Behavior `OnGameLoaded` after `SyncData` has run.

## Cross-version notes

The same base helpers and override stages exist in 1.3.15 and 1.4.5. Official module base IDs, local type IDs, and type lists can grow between versions; a mod should treat its own range as a permanent protocol and never copy a version-specific official range.

## Dependencies and navigation

- Member declarations: [SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveablePropertyAttribute](../SaveablePropertyAttribute).
- Execution: [SaveManager](../SaveManager) builds [DefinitionContext](../DefinitionContext) and reports definition errors.
- Behavior route: [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) and [IDataStore](../../campaign-ext/IDataStore).
- Object registry route: [MBObjectManager](../../campaign-ext/MBObjectManager).

- Parent: [save-system API](../)
- Siblings: [SaveManager](../SaveManager) · [SaveableFieldAttribute](../SaveableFieldAttribute)
- Related: [ContainerDefinition](../ContainerDefinition) · [IConflictResolver](../IConflictResolver) · [Save and crash boundaries](../../../architecture/crash-boundaries)
