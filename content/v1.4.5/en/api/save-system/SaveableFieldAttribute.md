---
title: "SaveableFieldAttribute"
description: "The attribute that adds an instance field to the TaleWorlds.SaveSystem member definition; LocalSaveId is the type-internal persistence contract."
---

# SaveableFieldAttribute

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class SaveableFieldAttribute : Attribute`  
**Base:** `Attribute`  
**File:** `TaleWorlds.SaveSystem/SaveableFieldAttribute.cs`

## Overview

`SaveableFieldAttribute(short localSaveId)` does exactly one thing: it tells the save system "this instance field is a save member and uses this type-internal local number". It does not create a type definition on its own, does not register a Behavior, and does not make a non-serializable field serializable.

## Mental Model

Treat `LocalSaveId` as a **schema number for the type member**, not a database auto-increment id. The save system reads the Attribute on the field, and then [SaveableTypeDefiner](../SaveableTypeDefiner/) puts the class containing that field into the definition context; [SaveManager](../SaveManager/) can then collect, write out, and restore the member.

The field number must be unique within the **field table** of its declaring class level and stable across versions. `TypeDefinition` collects fields and properties separately, with separate read/write; they do not share a duplicate check. A field's `MemberTypeId` still contains the declaring class level and the `LocalSaveId`; field declaration order and private/public visibility must not be treated as a compatibility mechanism.

## When to Use / When Not to Use

Good for: state that is an implementation detail of the class, needs to be saved with the object graph, and does not need to be exposed through a public property — for example a counter, persistent state outside a cache, or a reference to a defined `MBObjectBase`.

Not good for:

- A Behavior's private state should be registered first in `CampaignBehaviorBase.SyncData(IDataStore)`; see [IDataStore](../../campaign/IDataStore).
- Pure runtime caches, thread handles, UI controls, and scene-entity handles should not be saved.
- Do not use the Attribute as type registration; the class containing the field still must be registered by a definer.

## Members

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

`LocalSaveId` is a readable/writable `short` property, but product code should treat it as an already-published schema number and not rewrite it at runtime. The source Attribute target includes only `Field`; property members should use [SaveablePropertyAttribute](../SaveablePropertyAttribute). `TypeDefinition.CollectFields()` forms the `MemberTypeId` from the declaring type's class level plus this id; the field name and declaration order do not participate in matching.

## Real Example: Field, Type Definition, and Save

```csharp
public sealed class RelicState
{
    [SaveableField(1)]
    private int _discoveredCount;

    [SaveableField(2)]
    private Hero _discoverer;

    public void RestoreDefaults()
    {
        _discoveredCount = Math.Max(_discoveredCount, 0);
    }
}

public sealed class RelicSaveDefiner : SaveableTypeDefiner
{
    public RelicSaveDefiner() : base(910000) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(RelicState), 1);
    }
}

public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("_myMod_relicState_v1", ref _relicState);
}
```

This example shows three different contracts: the Attribute marks the field, the definer assigns the type definition to `RelicState`, and the Behavior's `IDataStore` saves the root object. Writing only the first layer will not automatically put the field into a fully readable/writable save graph.

## Real Native Declaration

In 1.4.5, `AllianceCampaignBehavior` uses a struct field and an outer Behavior `SyncData`:

```csharp
internal struct Alliance(Kingdom kingdom1, Kingdom kingdom2, CampaignTime endTime)
{
    [SaveableField(0)] public readonly Kingdom Kingdom1 = kingdom1;
    [SaveableField(1)] public readonly Kingdom Kingdom2 = kingdom2;
    [SaveableField(2)] public CampaignTime EndTime = endTime;
}

public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("_alliances", ref _alliances);
}
```

The same file's `AllianceCampaignBehaviorTypeDefiner` registers the struct with `AddStructDefinition(typeof(Alliance), 1)` and the list with `ConstructContainerDefinition(typeof(List<Alliance>))`. Callers get the Behavior from `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()`; they do not create the definer manually. This example cleanly separates the outer string key, the type SaveId, and the field `LocalSaveId`.

## Risks and Save Boundaries

- **Duplicate number in the field table confuses members.** When two fields at the same declaring class level use the same `LocalSaveId`, `CollectFields()` records a definition error; properties are collected by a separate property table, so you cannot claim fields/properties share uniqueness on that basis.
- **Do not renumber after release.** Changing a field from `1` to `3` is equivalent to changing the save schema; without a compatible resolver, an old save cannot find data by the original member.
- **Do not change the field type in place.** `int` to `List<int>`, or an object to an incompatible type, can fail during collection or loading. Adding a versioned member and keeping an old-data conversion path is safer.
- **A missing definer is not a harmless omission.** When a type is not in the `DefinitionContext`, `SaveManager.Save` may return failure due to a definition error rather than silently saving the field.
- **Field values must be able to enter the object graph.** Putting a temporary engine object, a third-party handle, or an unresolvable cyclic object into a field will make save collection/load fail.
- **Do not mix `IDataStore` and the Attribute.** `IDataStore` buckets by string key; `SaveableField` defines members by type and `LocalSaveId`; their compatibility rules differ.

- **Load timing.** `SaveManager.Load` first builds the definition context; `LoadContext` creates objects, resolves references, fills fields/properties, and only then runs init and late-init callbacks. Do not assume a field is already restored in a constructor or an over-eager event; repairs that depend on other objects should go into a load callback or the Behavior's `OnGameLoaded`.

## Cross-Version Notes

1.3.15 and 1.4.5 have identical Attribute constructors and `LocalSaveId` type. A cross-version mod should fix the numbers, fix the field types, and design compatible loading before deleting/changing members; do not rely on field order from a decompiled file.

## Dependencies

- Upstream: [SaveableTypeDefiner](../SaveableTypeDefiner) puts the class declaring the field into the definition table.
- Execution: [SaveManager](../SaveManager) initializes the definition context and performs save/load.
- Comparison: [SaveablePropertyAttribute](../SaveablePropertyAttribute) marks properties; [IDataStore](../../campaign/IDataStore) handles Behavior key-value sync.
- Common objects: the `StringId`, `Id` of [MBObjectBase](../../campaign-ext/MBObjectBase) are also defined by the save system.

## See Also

- Parent: [save-system API](./)
- Sibling: [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner)
- Related: [FieldDefinition](../FieldDefinition) · [MemberTypeId](../MemberTypeId) · [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) · [Save and Crash Boundaries](../SaveManager)
