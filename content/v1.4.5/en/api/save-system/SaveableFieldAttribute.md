---
title: "SaveableFieldAttribute"
description: "Assigns a stable LocalSaveId to an instance field of a registered save type; TypeDefinition later collects its field metadata."
---

# SaveableFieldAttribute

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class SaveableFieldAttribute : Attribute`  
**Source:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableFieldAttribute.cs`

## Responsibility

`SaveableFieldAttribute` is the SaveSystem contract for a field member. It carries a `LocalSaveId` for one instance field; it does not register the field type, create a `DefinitionContext`, or make an otherwise undefined CLR object saveable.

## Mental model

Treat it as a stable save-slot number inside an already registered type, not as a runtime tag. The actual chain is:

1. [SaveManager](../SaveManager) creates a [DefinitionContext](../DefinitionContext).
2. `DefinitionContext` discovers and initializes [SaveableTypeDefiner](../SaveableTypeDefiner), which registers types, roots, generics, and containers.
3. After type definitions exist, [TypeDefinition](../TypeDefinition) reflects over fields carrying this attribute.
4. The field definition and `LocalSaveId` are used to locate member data while the object graph is saved or loaded.

When the goal is to save a small piece of state owned by a [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase), start with `SyncData(IDataStore)`. Do not create a Saveable field schema just because a behavior has an `int`; the two mechanisms have different owners, keys, and load timing.

## Source contract

The source definition is:

```csharp
[AttributeUsage(AttributeTargets.Field)]
public class SaveableFieldAttribute : Attribute
{
    public short LocalSaveId { get; set; }

    public SaveableFieldAttribute(short localSaveId)
    {
        LocalSaveId = localSaveId;
    }
}
```

The practical consequences are:

- `AttributeTargets.Field` permits the attribute only on fields; applying it to a property or class is not a valid use of this attribute.
- `AllowMultiple` and `Inherited` are omitted, so .NET defaults are `AllowMultiple = false` and `Inherited = true`. The engine still builds the member definition from the field's declaring type and reflection result; `Inherited = true` does not mean a derived class receives a new independent save slot automatically.
- There is no parameterless constructor. `[SaveableField(11)]` calls the constructor that accepts a `short`.
- `LocalSaveId` has a public setter, and the source constructor performs no range or duplicate validation. The engine reads the current value during collection; after release, treat it as a stable, non-negative, never-reused schema ID and do not mutate it at runtime.

## Real source example

`TaleWorlds.Core.Game` uses a private field for its next troop seed:

```csharp
public sealed class Game : IGameStateManagerOwner
{
    [SaveableField(11)]
    private int _nextUniqueTroopSeed = 1;
}
```

Here `11` is the local member ID and `int` is the field type. The member is reachable in the object graph not because the attribute registers `int`, but because the core save definitions already know the basic type and `Game` is registered separately as a root.

The same `Game` type contrasts it with a property:

```csharp
[SaveableProperty(3)]
public GameType GameType { get; private set; }
```

That member must use [SaveablePropertyAttribute](../SaveablePropertyAttribute); the field attribute cannot be applied to a property. `Game`'s root marker and root definition additionally involve [SaveableRootClassAttribute](../SaveableRootClassAttribute) and [SaveableTypeDefiner](../SaveableTypeDefiner). These are three different ID layers and must not be mixed.

## When collection happens

`DefinitionContext.FillWithCurrentTypes()` first gathers saveable assemblies, instantiates non-abstract `SaveableTypeDefiner` types, and runs the basic, class, struct, interface, enum, root, generic, and container definition hooks, followed by conflict resolver definitions. Only then does it collect member metadata from root-class, class, and struct `TypeDefinition` instances.

For ordinary root and class definitions, the source order is `CollectInitializationCallbacks()`, then `CollectProperties()`, then `CollectFields()`. The important behavior of `CollectFields()` is:

- It examines instance public/non-public fields and keeps non-private fields exposed by the type.
- It walks the inheritance chain to include private fields declared by base types.
- The collection is for instance fields; static fields do not enter this path.
- For each field it reads the first `SaveableFieldAttribute`, computes a class level from the field's `DeclaringType`, and constructs a `MemberTypeId`.
- On success it adds a `FieldDefinition` to `TypeDefinition.FieldDefinitions` and `MemberDefinitions`.

This is why a field is not saved at the moment the attribute is written. It is also why marking a field does not replace registering the field type or its containers through a definer.

## MemberTypeId, inheritance, and duplicate IDs

`LocalSaveId` is not the complete member identity. `TypeDefinition` combines the declaring type's class level with the local ID:

```csharp
MemberTypeId memberTypeId = new MemberTypeId(classLevel, saveableFieldAttribute.LocalSaveId);
```

`MemberTypeId.SaveId` is calculated from `(TypeLevel << 8) + LocalSaveId`. Therefore:

- Members declared at different levels of an inheritance chain can have different identities even when their local numbers match.
- Moving a field to a base or derived type, or changing the inheritance structure, can change `TypeLevel`; the schema may change even if the field name and number remain the same.
- `_fields` is a dictionary keyed by `MemberTypeId`. If two fields at the same declaration level use the same ID, `CollectFields()` records a duplicate SaveId error in `TypeDefinition.Errors` instead of overwriting the earlier definition.
- Fields and properties use separate dictionaries. The same pair across the two member kinds is not the duplicate check performed by these methods, but a project should still keep one clear, stable numbering table per type.

Duplicate IDs are not ignorable warnings. `DefinitionContext` aggregates `TypeDefinition.Errors`, and `SaveManager.Save` returns a failure when the context has errors instead of starting a trustworthy object-graph serialization.

## Type dependencies and the `SyncData` boundary

The attribute answers only “which field, with which member ID.” It does not answer how the field type is serialized. If the field type is a custom class, struct, enum, closed generic, or container, confirm that [SaveableTypeDefiner](../SaveableTypeDefiner) and [DefinitionContext](../DefinitionContext) have a corresponding definition. [SaveManager.CheckSaveableTypes](../SaveManager) can help find attributed member types that are still undefined.

`CampaignBehaviorBase.SyncData([IDataStore](../../campaign/IDataStore))` is a separate contract: the behavior manager creates a data record for the behavior and synchronizes fields by stable string keys. It is not an entirely unrelated file format: the internal `CampaignBehaviorDataStore.BehaviorSaveData` is itself saved by SaveSystem. `SyncData` first writes behavior state into key/value records, and that adapter then becomes part of the object graph. A behavior-owned `_daysObserved`, counter, or configuration value does not need `[SaveableField]` on the same field. Use this attribute only when the member belongs to a type already in the SaveSystem object graph and a member-level schema is actually required.

## Compatibility and risks

- **Do not reorder released IDs.** Changing `11` to `12`, reusing a retired `11`, changing the declaring type, or changing the field type changes how old saves are interpreted. Keep retired slots reserved and use an explicit conflict resolver or migration strategy when required.
- **Do not rely on field names.** SaveSystem locates members through type level and `MemberTypeId`; renaming a field does not preserve its old ID, and moving it can change the level component.
- **Do not hide duplicates.** A duplicate field ID at one type level becomes a context error. Fix the numbering table and test save/load rather than treating the message as ordinary logging.
- **Do not persist transient runtime objects.** `Mission`, `Agent`, UI controls, delegates, threads, and engine handles should not enter a campaign save merely because a field can reference them; reacquire them at the correct lifecycle boundary.
- **Do not bypass the game's save entry point.** A mod should not create a `DefinitionContext` or call `SaveManager.Save` on `Campaign.Current` from an event callback. Ordinary campaign state belongs in the behavior `SyncData` flow.

## Navigation

- Parent: [Save system index](../)
- Siblings: [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [SaveableRootClassAttribute](../SaveableRootClassAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
- Related: [DefinitionContext](../DefinitionContext) · [TypeDefinition](../TypeDefinition) · [MemberTypeId](../MemberTypeId) · [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [Game](../../core/Game)
