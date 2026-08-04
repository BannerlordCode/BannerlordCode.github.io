---
title: "SaveablePropertyAttribute"
description: "Assigns a stable LocalSaveId to an instance property of a registered save type; TypeDefinition later collects its property metadata."
---

# SaveablePropertyAttribute

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class SaveablePropertyAttribute : Attribute`  
**Source:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs`

## Responsibility

`SaveablePropertyAttribute` is the SaveSystem contract for a property member. It carries a `LocalSaveId` for one instance property; it does not register the property type, create a `DefinitionContext`, or put a property into a save merely because it is visible.

## Mental model

Treat it as a save-slot number exposed through a property of an already registered type. The actual chain is:

1. [SaveManager](../SaveManager) creates a [DefinitionContext](../DefinitionContext).
2. `DefinitionContext` discovers and initializes [SaveableTypeDefiner](../SaveableTypeDefiner), registering types and containers that can enter the object graph.
3. After type definitions exist, [TypeDefinition](../TypeDefinition) reflects over instance properties carrying this attribute.
4. The property definition and `LocalSaveId` are used to locate member data while the object graph is saved or loaded.

When the goal is to save state owned by a [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase), start with `SyncData(IDataStore)`. Do not confuse behavior key/value data with the SaveSystem property schema.

## Source contract

The source definition is:

```csharp
[AttributeUsage(AttributeTargets.Property)]
public class SaveablePropertyAttribute : Attribute
{
    public short LocalSaveId { get; set; }

    public SaveablePropertyAttribute(short localSaveId)
    {
        LocalSaveId = localSaveId;
    }
}
```

The practical consequences are:

- `AttributeTargets.Property` permits the attribute only on properties; fields must use [SaveableFieldAttribute](../SaveableFieldAttribute).
- `AllowMultiple` and `Inherited` are omitted, so the defaults are `AllowMultiple = false` and `Inherited = true`. This does not mean a same-named property in a derived type automatically receives a safe new save ID; the engine still builds identity from the property's `DeclaringType`.
- There is no parameterless constructor. `[SaveableProperty(3)]` calls the constructor that accepts a `short`.
- `LocalSaveId` has a public setter, and the constructor validates neither range nor uniqueness. The engine reads the current value during collection; released IDs should be stable, non-negative, and never reused, and should not be rewritten at runtime.

## Real source example

`TaleWorlds.Core.Game` saves its game type property:

```csharp
public sealed class Game : IGameStateManagerOwner
{
    [SaveableProperty(3)]
    public GameType GameType { get; private set; }
}
```

`3` is the local member ID and `GameType` is the property type. The private setter remains part of the source contract. The property is collectable because core save definitions separately provide the type and root definitions for `Game`, not because the attribute registers either one automatically.

The same `Game` type also contains a field member:

```csharp
[SaveableField(11)]
private int _nextUniqueTroopSeed = 1;
```

Fields and properties are distinct attribute targets. `Game`'s `[SaveableRootClass(5000)]`, the root registration in `SaveableCoreTypeDefiner`, and the member IDs `3` and `11` belong to different layers and cannot substitute for one another.

## Property boundary

`SaveablePropertyAttribute` marks a property; it does not guarantee that a mod can call its setter at runtime. During collection, the source uses reflection to obtain `PropertyInfo` and the attribute. `PropertyDefinition` then requires both a getter and a setter; the setter may be private or internal, and loading invokes it directly. Missing either accessor triggers an assertion or exception rather than safely skipping a read-only property. Prefer the readable properties the engine itself uses, and understand their setter, initialization, and post-load invariants.

Do not treat a computed property as persisted state. If its getter derives a value from `Campaign.Current`, UI state, or a transient cache, the same context may not exist during loading. Persist the stable source state and recompute derived values at the correct post-load boundary.

## When collection happens

`DefinitionContext.FillWithCurrentTypes()` first gathers saveable assemblies and runs every `SaveableTypeDefiner` definition hook: basic, class, struct, interface, enum, root, generic, container, and finally conflict resolver definitions. After registration, it collects members from root-class, class, and struct `TypeDefinition` instances.

For root and class definitions, the source calls `CollectInitializationCallbacks()`, then `CollectProperties()`, then `CollectFields()`. `CollectProperties()` does the following:

- Gets instance properties with `BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic`.
- Reads the first `SaveablePropertyAttribute` and its `LocalSaveId`.
- Computes a class level from the property's `DeclaringType`, creates a `MemberTypeId`, and constructs a `PropertyDefinition`.
- Adds the definition to `_properties` and `MemberDefinitions` when the ID is free; otherwise it records an error in `TypeDefinition.Errors`.

Writing the attribute in source therefore does not serialize the property immediately. The property becomes SaveSystem metadata only after a registered `TypeDefinition` performs collection.

## MemberTypeId, inheritance, and duplicate IDs

The complete member identity is the class level plus the local ID, not `LocalSaveId` alone:

```csharp
MemberTypeId memberTypeId = new MemberTypeId(classLevel, saveablePropertyAttribute.LocalSaveId);
```

`MemberTypeId.SaveId` is calculated from `(TypeLevel << 8) + LocalSaveId`. Keep these consequences in view:

- Properties declared by base and derived types can have different `TypeLevel` values, so the same local number does not mean the same slot.
- Moving a property, changing the inheritance structure, or changing which type declares it can change the class level and therefore the schema.
- `CollectProperties()` uses `_properties` keyed by `MemberTypeId`. Two properties at one declaration level with the same ID produce an error rather than safely replacing an earlier definition.
- Fields and properties use separate internal dictionaries. That means duplicate checking is performed per member kind; it does not make arbitrary number reuse a good long-term schema practice. Keep one clear numbering table for each type.

`DefinitionContext` aggregates these errors. When the definition context contains errors, `SaveManager.Save` returns a failure instead of producing a trustworthy save.

## Type dependencies and the `SyncData` boundary

The property attribute supplies only member identity. If the property type is a custom class, struct, enum, closed generic, or container, [SaveableTypeDefiner](../SaveableTypeDefiner) must define it through [DefinitionContext](../DefinitionContext). [SaveManager.CheckSaveableTypes](../SaveManager) can help find attributed properties whose types are still undefined.

Campaign behavior persistence is separate: `CampaignBehaviorManager` creates an [IDataStore](../../campaign/IDataStore) record for each [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase), and `SyncData(IDataStore)` synchronizes values by stable string keys. The adapter is not entirely outside SaveSystem: its internal `CampaignBehaviorDataStore.BehaviorSaveData` carries a Saveable field and is ultimately saved as part of the object graph. A property owned by a behavior does not need `[SaveableProperty]` as well. Use this attribute when the property belongs to a type already in the SaveSystem object graph and a member-level save schema is actually required.

## Compatibility and risks

- **Keep released IDs stable.** Changing `3` to `4`, reusing a retired number, changing the property type, or moving its declaration changes the old save schema. Reserve old numbers and define an explicit migration or old-version mapping when needed.
- **Do not treat the property name as the compatibility key.** SaveSystem locates members through `MemberTypeId`; renaming does not preserve the old ID, and an inheritance change can alter the level component.
- **Do not ignore duplicate IDs.** A duplicate property ID at one type level becomes a context error and prevents `SaveManager.Save` from performing a trustworthy serialization.
- **Do not persist dynamic runtime references.** Mission, Agent, UI, delegates, and engine objects may outlive or outlast the campaign save boundary. Persist stable identifiers or scalar state and reacquire runtime objects after loading.
- **Do not use it instead of behavior persistence.** For simple state owned by a behavior, use stable `SyncData` keys; do not create a context or bypass the game's save order from `OnBeforeSave`.

## Navigation

- Parent: [Save system index](../)
- Siblings: [SaveableFieldAttribute](../SaveableFieldAttribute) · [SaveableRootClassAttribute](../SaveableRootClassAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
- Related: [DefinitionContext](../DefinitionContext) · [TypeDefinition](../TypeDefinition) · [PropertyDefinition](../PropertyDefinition) · [MemberTypeId](../MemberTypeId) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [Game](../../core/Game)
