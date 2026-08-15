---
title: "SaveableFieldAttribute"
description: "The Attribute that marks an instance field for TaleWorlds.SaveSystem; LocalSaveId is part of the type's persistent schema."
---
# SaveableFieldAttribute

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableFieldAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.SaveSystem/SaveableFieldAttribute.cs` (semantics checked against 1.4.5 source)

## One-line responsibility

`SaveableFieldAttribute(short localSaveId)` tells the save system that an instance field is a save member and gives it a type-local identifier. It does not create a type definition, register a campaign behavior, or make an otherwise unsupported value serializable.

## Mental Model

Treat `LocalSaveId` as a **schema number for a member of one type**, not as a database auto-increment ID. The save system reflects over the Attribute, then [SaveableTypeDefiner](../SaveableTypeDefiner) puts the containing class into the definition context; [SaveManager](../SaveManager) can then collect, write, and restore the member.

The ID must be unique within the declaring type level's **field table** and stable across versions. `TypeDefinition` collects and reads fields and properties through separate tables; they do not share duplicate checking. A field's `MemberTypeId` still includes the declaring class level and `LocalSaveId`. Declaration order and visibility are not compatibility mechanisms.

## When to use / when not to use

Use it when state is an implementation detail of a class, belongs in the save object graph, and does not need a public property. Typical values are counters, non-cache state, and references to save-defined `MBObjectBase` objects.

Do not use it for:

- behavior-private state that should normally be registered in `CampaignBehaviorBase.SyncData(IDataStore)`; read [IDataStore](../../campaign-ext/IDataStore);
- runtime caches, thread handles, UI controls, or scene entity handles;
- type registration. The containing class still needs a definer.

## Member shape

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

`LocalSaveId` is a settable `short`, but product code should treat it as a published schema number and never rewrite it at runtime. The source targets only `Field`; properties use [SaveablePropertyAttribute](../SaveablePropertyAttribute). `TypeDefinition.CollectFields()` combines this ID with the declaring type's class level into `MemberTypeId`; field name and declaration order are not used.

## Real example: field, type definition, and load root

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

These are three different contracts: the Attribute marks fields, the definer assigns `RelicState` a type definition, and the behavior's `IDataStore` saves the root object. Marking only the field does not make a complete save graph.

## Real native declaration

In 1.4.5, `AllianceCampaignBehavior` combines field slots with an outer Behavior `SyncData` call:

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

The same file's `AllianceCampaignBehaviorTypeDefiner` registers `Alliance` with `AddStructDefinition(typeof(Alliance), 1)` and its list with `ConstructContainerDefinition(typeof(List<Alliance>))`. Callers acquire the Behavior through `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()`; they do not construct the definer. This separates the outer string key, type SaveId, and field `LocalSaveId`.

## Risks and crash boundaries

- **Duplicate field IDs confuse members.** Two fields at the same declaring type level with one `LocalSaveId` make `CollectFields()` record a definition error. Properties are collected in a separate property table, so field/property IDs must not be described as one shared uniqueness space.
- **Do not renumber a published member.** Changing `1` to `3` changes the save schema; without a compatibility resolver, old saves cannot find the original member.
- **Do not change the field type in place.** Replacing `int` with `List<int>` or an incompatible object can fail during collection or load. Add a versioned member and an explicit conversion path.
- **A missing definer is not harmless.** If the type is absent from `DefinitionContext`, `SaveManager.Save` can fail with definition errors instead of silently persisting the field.
- **The value must belong to the save graph.** Transient engine objects, third-party handles, and unresolvable cycles can make collection or loading fail.
- **Do not confuse routes.** `IDataStore` uses string-keyed behavior buckets; `SaveableField` uses type and `LocalSaveId` definitions. Their compatibility rules are different.

- **Load timing.** `SaveManager.Load` builds the definition context first; `LoadContext` creates objects, resolves references, fills fields/properties, and only then runs initialization and late-initialization callbacks. Do not assume a field is restored from a constructor or early event; repair cross-object state in a load callback or Behavior `OnGameLoaded`.

## Cross-version notes

The Attribute constructor and `LocalSaveId` type are the same in 1.3.15 and 1.4.5. A cross-version mod should keep IDs and field types stable and plan compatibility before removing or changing members; declaration order is not a compatibility mechanism.

## Dependencies

- Upstream: [SaveableTypeDefiner](../SaveableTypeDefiner) adds the containing class to the definition table.
- Execution: [SaveManager](../SaveManager) initializes the definition context and performs save/load.
- Contrast: [SaveablePropertyAttribute](../SaveablePropertyAttribute) marks properties; [IDataStore](../../campaign-ext/IDataStore) handles behavior key/value sync.
- Common object: [MBObjectBase](../../campaign-ext/MBObjectBase) exposes `StringId` and `Id` that the save system also defines.

- Parent: [save-system API](./)
- Siblings: [SaveablePropertyAttribute](../SaveablePropertyAttribute) · [SaveableTypeDefiner](../SaveableTypeDefiner)
- Related: [FieldDefinition](../FieldDefinition) · [MemberTypeId](../MemberTypeId) · [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) · [Save and crash boundaries](../../../architecture/crash-boundaries)
