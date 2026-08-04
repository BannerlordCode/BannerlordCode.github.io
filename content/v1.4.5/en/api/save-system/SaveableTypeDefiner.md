---
title: "SaveableTypeDefiner"
description: "The assembly-discovered definition registrar for Bannerlord saves: reserve a type-ID range, describe saveable types and containers, and let SaveManager build a DefinitionContext before serialization."
---

# SaveableTypeDefiner

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public abstract class SaveableTypeDefiner`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`

## Responsibility

Choose a stable save-ID range for the types registered by this definer and use it to register the types, closed generics, and containers that may occur in a persisted object graph. A range is not automatically exclusive to one assembly: different definers can use the same base, so base IDs and local IDs must be coordinated across the global definition set.

## Mental model

`SaveableTypeDefiner` is startup metadata, not a save service and not an object you obtain during gameplay. A concrete definer has a parameterless constructor and is discovered from loaded assemblies by [DefinitionContext](../DefinitionContext). During definition initialization it receives that context internally, then its hooks describe how CLR types map to save definitions. Later, the save/load pipeline uses those definitions to understand the object graph.

The two ID layers must remain separate:

- A definer gives a **type** a `TypeSaveId`: every `Add*Definition` helper adds its local `saveId` to the constructor's `saveBaseId`.
- `[SaveableField(localId)]` and `[SaveableProperty(localId)]` give individual members a **local member** ID. [TypeDefinition](../TypeDefinition) reflects those attributes after type registration and combines each local ID with its declaring-class level.
- `[SaveableRootClass(id)]` marks a root-class identity. In the engine, [Game](../../core/Game) carries `[SaveableRootClass(5000)]`, while `SaveableCoreTypeDefiner.DefineRootClassTypes()` separately calls `AddRootClassDefinition(typeof(Game), 4001)` under base ID `10000`. A root marker is therefore not a replacement for registering a definition.

Use a definer only when a saveable member can reach a type that the existing global definitions do not already cover. For ordinary campaign feature state, prefer the campaign persistence route described by [SaveManager](../SaveManager), rather than creating a definer just to persist a primitive or a small behavior-owned value. Do not instantiate a definer, construct a `DefinitionContext`, or reset `SaveManager` from normal mod runtime code: those are engine-owned initialization operations, not a public acquisition path.

## Lifecycle and ownership

`SaveManager.InitializeGlobalDefinitionContext()` creates the global context and calls `FillWithCurrentTypes()`:

1. `DefinitionContext` gathers the SaveSystem assembly plus loaded assemblies that reference it.
2. It finds every non-abstract `SaveableTypeDefiner`, creates it with `Activator.CreateInstance`, and calls its internal `Initialize(context)`.
3. It invokes hooks across **all** discovered definers in this order: basic, class, struct, interface, enum, root class, generic struct, generic class, container, then conflict resolvers.
4. It asks registered [TypeDefinition](../TypeDefinition) instances to collect load callbacks, `[SaveableProperty]` members, and `[SaveableField]` members; definition errors are retained by the context.
5. It discovers and initializes generated save managers. `SaveManager.Save(...)` refuses to begin graph serialization when the global context has errors; `Load(...)` builds a fresh context for that load.

This is the actual engine-owned entry point, shown to explain ownership rather than as a mod startup recipe:

```csharp
// TaleWorlds.SaveSystem.SaveManager
public static void InitializeGlobalDefinitionContext()
{
    _definitionContext = new DefinitionContext();
    _definitionContext.FillWithCurrentTypes();
    foreach (string error in _definitionContext.Errors)
    {
        Debug.Print(error);
    }
}
```

Global discovery means the definition class is not registered through a public `SaveManager.Register(...)` API. Its assembly must already be loaded and reference `TaleWorlds.SaveSystem`; its concrete definer must be constructible by the scan. Do not invent or document a runtime acquisition route that the source does not provide.

## Constructor and definition hooks

### `SaveableTypeDefiner(int saveBaseId)`

The constructor stores the base for this definer's numeric namespace. `AddClassDefinition(typeof(TextObject), 1)` from a definer constructed with `base(20000)` produces type save ID `20001`. The base is a persisted compatibility boundary, not a cosmetic category: keep it stable and allocate local IDs deliberately.

```csharp
// TaleWorlds.Localization.SaveableLocalizationTypeDefiner
public SaveableLocalizationTypeDefiner()
    : base(20000)
{
}
```

| Hook | When `DefinitionContext` calls it | Use it for |
|---|---|---|
| `DefineBasicTypes()` | first | CLR/basic values with an `IBasicTypeSerializer` |
| `DefineClassTypes()` | after basic types | ordinary reference types and class custom fields |
| `DefineStructTypes()` | after classes | value types and struct custom fields |
| `DefineInterfaceTypes()` | after structs | interface definitions |
| `DefineEnumTypes()` | after interfaces | enums, optionally with `IEnumResolver` |
| `DefineRootClassTypes()` | after enums | a graph root with `AddRootClassDefinition` |
| `DefineGenericStructDefinitions()` | after roots | concrete closed struct generic instantiations |
| `DefineGenericClassDefinitions()` | after generic structs | concrete closed class generic instantiations |
| `DefineContainerDefinitions()` | after generic definitions | arrays, lists, queues, and dictionaries whose element/key/value types are already known |
| `DefineConflictResolvers()` | last | compatibility remapping for older save IDs |

The order explains a common failure: `ConstructContainerDefinition(typeof(Dictionary<string, TextObject>))` needs definitions for `string` and `TextObject` before the container is constructed. A definer may register those dependencies earlier in the same `DefineContainerDefinitions()` hook, but it must construct the container only after that registration and must not register the same container twice.

## Registration helpers and side effects

- `AddBasicTypeDefinition`, `AddClassDefinition`, `AddStructDefinition`, `AddInterfaceDefinition`, `AddEnumDefinition`, and `AddRootClassDefinition` create a definition with `saveBaseId + saveId` and add it to `DefinitionContext`.
- `AddClassDefinitionWithCustomFields` and `AddStructDefinitionWithCustomFields` additionally attach explicit `(fieldName, localId)` mappings. Use them for types whose fields cannot be attributed in source, such as engine-defined generic utility types; they do not remove the need for stable member IDs.
- `ConstructGenericClassDefinition` and `ConstructGenericStructDefinition` materialize a **closed** generic from a generic definition already registered in an earlier hook. They are not a generic wildcard registration.
- `ConstructContainerDefinition` derives a container save ID from its element, key, and value definitions. For `List<T>`, the context also registers compatible `MBList<T>` and `MBReadOnlyList<T>` definitions. It first checks `HasDefinition(type)` and emits `Debug.FailedAssert` for a duplicate container.
- `AddConflictResolver` registers a resolver against `saveBaseId + saveId` only when the resolver's new target type already has a class definition. Because this hook is last, its target can be resolved before registration.

The other `Add*` helpers flow into dictionaries keyed by both CLR `Type` and `SaveId`; duplicate types or duplicate IDs therefore fail during context construction rather than safely replacing an old definition. Treat every type ID, custom-field ID, and resolver ID as persisted data.

## Concrete engine definitions

The localization definer is a compact real example. It reserves `20000`, makes `TextObject` type ID `20001`, then defines the `Dictionary<string, TextObject>` container only after the class hook has run:

```csharp
using System.Collections.Generic;
using TaleWorlds.SaveSystem;

namespace TaleWorlds.Localization;

public class SaveableLocalizationTypeDefiner : SaveableTypeDefiner
{
    public SaveableLocalizationTypeDefiner()
        : base(20000)
    {
    }

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

`TaleWorlds.ObjectSystem.SaveableObjectSystemTypeDefiner` uses `base(10000)`, registers `MBGUID` as a basic type at local `1005` with `MBGUIDBasicTypeSerializer`, and registers `MBObjectBase` as a class at local `34`. The same base is also used by `TaleWorlds.Core.SaveableCoreTypeDefiner`; it demonstrates why local type IDs must be coordinated across all definitions sharing an ID range, not guessed per class.

## Type definition versus member attributes

The definition and attributes answer different questions:

| Layer | Question answered | Engine evidence |
|---|---|---|
| Definer / `DefinitionContext` | Can this runtime type, generic instance, or container appear in the graph, and what is its type ID? | `AddClassDefinition`, `ConstructGenericClassDefinition`, `ConstructContainerDefinition` |
| Root registration | Which registered class can start a save graph? | `AddRootClassDefinition(typeof(Game), 4001)` in `SaveableCoreTypeDefiner` |
| Field/property attributes | Which instance members of a registered class/struct are serialized, and what are their local IDs? | `Game` has `[SaveableField(11)]` and `[SaveableProperty(3)]`, `(8)`, `(12)` |

`TypeDefinition.CollectProperties()` and `CollectFields()` scan public and non-public instance members after registration. Duplicate `MemberTypeId` values are reported as context errors. Marking a field does not define its field type, and defining a class does not serialize all of its fields automatically: both sides of the contract must be present.

## Risk boundary

- **Base-ID or local type-ID collisions:** two registrations targeting the same `Type` or final `SaveId` collide in `DefinitionContext`'s dictionaries. A duplicate container additionally triggers `Debug.FailedAssert`. The save pipeline receives definition errors or fails before producing a trustworthy save.
- **Changing persisted IDs:** changing `saveBaseId`, a local type ID, a custom-field ID, or a `[SaveableField]`/`[SaveableProperty]` local ID changes the schema of existing saves. Renaming a member is not equivalent to preserving its ID. Add an explicit compatibility strategy before changing a released identifier.
- **Unsupported object graphs:** a marked member whose type, closed generic, or container is not defined cannot be represented correctly. `SaveManager.CheckSaveableTypes()` can identify unregistered attributed field/property types; containers also require their component types to be defined first.
- **Duplicate definitions and wrong timing:** a definer can be discovered globally beside engine and other mod definers. Do not register engine types or shared containers a second time, and do not try to add definitions after `DefinitionContext.FillWithCurrentTypes()` has already collected member metadata.

## Dependencies and navigation

- **Upstream:** [SaveManager](../SaveManager) creates the global context; [DefinitionContext](../DefinitionContext) discovers and invokes definers.
- **Downstream:** [TypeDefinition](../TypeDefinition) collects the attributed members after type registration; [SaveableFieldAttribute](../SaveableFieldAttribute) and [SaveablePropertyAttribute](../SaveablePropertyAttribute) supply member-local IDs.
- **Root example:** [Game](../../core/Game) and [SaveableRootClassAttribute](../SaveableRootClassAttribute).

## Navigation

- Parent: [Save system index](../)
- Sibling: [SaveManager](../SaveManager) and [DefinitionContext](../DefinitionContext)
- Related: [TypeDefinition](../TypeDefinition), [SaveableFieldAttribute](../SaveableFieldAttribute), [SaveablePropertyAttribute](../SaveablePropertyAttribute), [SaveableRootClassAttribute](../SaveableRootClassAttribute), and [Game](../../core/Game)
