---
title: "SaveableFieldAttribute"
description: "Field-level save contract: [SaveableField(localSaveId)] puts an instance field into the object graph. LocalSaveId must stay stable; reuse or schema drift corrupts saves. Pair with SyncData carefully."
---

# SaveableFieldAttribute

**Namespace:** `TaleWorlds.SaveSystem`  
**Module:** `TaleWorlds.SaveSystem`  
**Type:** `public class SaveableFieldAttribute : Attribute`  
**Base:** `Attribute`  
**File:** `TaleWorlds.SaveSystem/SaveableFieldAttribute.cs`  
**AttributeUsage:** `AttributeTargets.Field` (fields only; properties use [`SaveablePropertyAttribute`](../SaveablePropertyAttribute))

## One-line job

Mark an **instance field on a saveable type** with a numeric slot `LocalSaveId` so [`SaveManager`](../SaveManager) reads and writes that member by **id, not field name**, during save and load.

## Mental Model

Treat `[SaveableField(n)]` as a **column number in the object graph**, not a toy reflection tag:

| Dimension | Fact |
|-----------|------|
| **Lifetime** | Fixed in source at compile time. Runtime: `TypeDefinition.CollectFields` scans it into the definition table; Save/Load paths read and write by id. |
| **Who creates / who holds** | You (the mod) declare it on the field. The engine holds `FieldDefinition` / `MemberTypeId`. The save file only sees the id layout. |
| **Layer** | **Save**: global object-graph serialization. Does **not** replace a Campaign Behavior's private bucket via [`IDataStore`](../../campaign-ext/IDataStore). |
| **What is the key?** | `short LocalSaveId`, combined with the declaring type's **class level** into `MemberTypeId`. **Not the field name.** Renaming the field is safe. Changing the id, or the type semantics of that id, is not. |

### What happens on save/load

```
[SaveableField(3)] private int _rep;
        │
        ▼
TypeDefinition.CollectFields
  → MemberTypeId(classLevel, LocalSaveId=3)
  → FieldDefinition(FieldInfo, id)
        │
        ▼
SaveManager serializes the object graph: write value by id
Load: find member by id and write back (wrong layout = crossed wires / crash)
```

### When to use

- Data lives on a type the **object graph will walk**: custom `MyModSaveData`, a class/struct registered through `SaveableTypeDefiner`, or a legal extension field on an official saveable entity.
- The value must survive save/load, and the type is SaveSystem-supported (primitives, `string`, enums, saveable references, `List<T>` / `Dictionary<K,V>`, etc.). Containers often need `ConstructContainerDefinition` in a Definer.
- Classic Behavior pattern: **outer** `IDataStore.SyncData("key", ref _root)`, **inner** fields of `_root` use `[SaveableField]`.

### When not to use

| Scenario | Correct alternative |
|----------|---------------------|
| Private counters/dicts owned only by a `CampaignBehaviorBase`, no independent type layout needed | [`IDataStore.SyncData`](../../campaign-ext/IDataStore) + stable **string key** |
| Cache fully rebuildable after load | Do not save; rebuild in `OnGameLoaded` / events |
| Property with get/set | [`SaveablePropertyAttribute`](../SaveablePropertyAttribute) |
| Public property setter has world side effects, but the raw value must still persist | Mark the **backing field** (official `Building._currentLevel` / `ItemRosterElement._amount`); do not mark the side-effecting property |
| Static fields, constants, throwaway debug fields | Do not mark; statics are not in the instance graph |
| Same logical state half via `SyncData` and half via `[SaveableField]` | **No double-write** (see [Crash Boundaries §1](../../../architecture/crash-boundaries)) |

### Shared id table with SaveableProperty

Inside `TypeDefinition`, fields and properties are collected into **two separate dictionaries**, so the same numeric id across kinds may **not** fail at definition time. Official mixed types (`Building`, `Workshop`, `ItemRosterElement`) still treat Field + Property `LocalSaveId` values as **one ascending slot table**. Mods should do the same: only add, never reuse retired ids, never collide across kinds. Details: [`SaveablePropertyAttribute`](../SaveablePropertyAttribute).

### vs `IDataStore.SyncData` (required reading)

```
SyncData(IDataStore)     → Behavior private bucket (StringId cabinet, key = string)
[SaveableField(n)]       → Global saveable object graph (layout = numeric LocalSaveId)
```

- **Behavior-private state** → override `SyncData`, call `dataStore.SyncData("stableKey", ref field)` per value.  
- **Members on world/custom objects** → `[SaveableField]`; the type must be rooted or registered via Definer.  
- Nested objects can use **outer SyncData, inner SaveableField** (see examples). Do not open a second parallel key for the same scalar.

## Dependencies

| Direction | Type / system | Relationship |
|-----------|---------------|--------------|
| **Upstream** | Your saveable type + [`SaveableTypeDefiner`](../SaveableTypeDefiner) | Type must enter `DefinitionContext`; member ids only matter after that |
| **Upstream** | [`SaveableRootClassAttribute`](../SaveableRootClassAttribute) / class definition id | Type-level SaveId and member LocalSaveId are two layers of contract |
| **Downstream** | `FieldDefinition` / `MemberTypeId` | Reflection wrappers; duplicate LocalSaveId is recorded on `TypeDefinition` error list |
| **Save** | [`SaveManager`](../SaveManager) | `InitializeGlobalDefinitionContext`, real Save/Load I/O |
| **Save** | [`AutoGeneratedSaveManager`](../AutoGeneratedSaveManager) | May generate access delegates for simple types; still depends on your ids |
| **Sibling** | [`IDataStore`](../../campaign-ext/IDataStore) / [`CampaignBehaviorBase`](../../campaign-ext/CampaignBehaviorBase) | Behavior bucket vs object graph; often combined, never substitutes for each other |
| **Sibling** | [`SaveablePropertyAttribute`](../SaveablePropertyAttribute) | Property slots; plan Field/Property LocalSaveId space so they do not collide |
| **Risk docs** | [Crash Boundaries §1](../../../architecture/crash-boundaries) | Id stability, load order, double-write |

## Risks and crash boundaries

> Authoritative summary: [Crash Boundaries §1](../../../architecture/crash-boundaries) (SaveId, SyncData vs SaveableField, load order).

| Risk | Symptom | Correct practice |
|------|---------|------------------|
| **Change LocalSaveId after release** | Old saves misaligned, silent cross-wiring, load crash | Id is a contract: only add; never change semantics; retired ids are **never reused** |
| **Same id, new type** (`int` → `List<Hero>` still id `3`) | Layout read as old type → crash or bad data | New semantics get a **new id**; old id stays retired |
| **Duplicate LocalSaveId on same type** | `TypeDefinition`: *SaveId … is already defined*; definition fails | Unique id per class level; inheritance uses class level, still avoid messy numbering |
| **Type not registered** | Save/load cannot find a definition | Register class/struct/container in `SaveableTypeDefiner`; enter DefinitionContext at startup |
| **Marked non-serializable type** | Save fails / validation fails | Only store SaveSystem-supported types; flatten complex graphs first |
| **Read field before load finishes** | NRE, empty collections, default 0 treated as truth | Wait for Behavior `SyncData` / `OnGameLoaded`; separate new-game vs load paths |
| **Double-write** | Half in bucket, half in graph; hard to debug | One path per piece of state |
| **Field and Property share the same id** | Collection may not error; layout hard to reason about | Unified numbering with Property (see above) |

Engine side (`TypeDefinition.CollectFields`):

- Scans instance fields (including private; private fields collected along the inheritance chain).  
- Builds `MemberTypeId` from `LocalSaveId` + `GetClassLevel(DeclaringType)`.  
- **If the same `MemberTypeId` already exists → record error; do not silently overwrite.**

## Key members

The attribute type is tiny. The whole contract sits on the constructor argument:

### Constructor

#### `public SaveableFieldAttribute(short localSaveId)`

- **Purpose:** Declare this field's member slot **within the declaring type (class level)**.  
- **When:** On the field, e.g. `[SaveableField(0)]` (C# may omit the `Attribute` suffix).  
- **Constraint:** `localSaveId` is `short`; unique within that type's layout; stable after release.

### Property

#### `public short LocalSaveId { get; set; }`

- **Purpose:** Slot number read at definition time (normally set only by the constructor).  
- **When:** You almost always pass it only as the attribute argument. Do not change it at runtime hoping to change save layout.

## Real examples

### Example 1: Behavior root object + inner SaveableField (recommended combo)

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

namespace MyMod
{
    // Must AddClassDefinition in SaveableTypeDefiner, and
    // ConstructContainerDefinition(typeof(List<string>))
    public class MyModSaveData
    {
        [SaveableField(0)]
        public int PlayerKills;

        [SaveableField(1)]
        public List<string> DefeatedBossIds = new List<string>();

        // Retired: never give a new field the old id 2
        // [SaveableField(2)] public int LegacyUnused;
    }

    public class MyCampaignBehavior : CampaignBehaviorBase
    {
        private MyModSaveData _data = new MyModSaveData();

        public override void RegisterEvents() { }

        public override void SyncData(IDataStore dataStore)
        {
            dataStore.SyncData("MyModData", ref _data);
            if (dataStore.IsLoading && _data == null)
            {
                _data = new MyModSaveData();
            }
        }

        public void RecordKill(string bossId)
        {
            _data.PlayerKills++;
            _data.DefeatedBossIds.Add(bossId);
        }
    }
}
```

Outer key `"MyModData"` stays stable; inner `0`/`1` stay stable. On upgrade, **add** `[SaveableField(2)]`. Do not change the meaning of `1`.

### Example 2: Wrong - id reuse and double-write

```csharp
// Wrong: after release, id 3 was int; now List. Old saves still read as int layout
// [SaveableField(3)] public int OldScore;
[SaveableField(3)]
public List<Hero> Allies; // corrupt save / crash

// Wrong: same counter both SyncData and SaveableField
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("Rep", ref _rep);
}
[SaveableField(0)] private int _rep; // also enters object graph → double-write
```

```csharp
// Right: new list gets a new id; old id 3 stays retired forever
[SaveableField(4)]
public List<string> AllyHeroIds;
```

## Cross-version notes

- **v1.3.x / v1.4.x:** Attribute surface is stable (`LocalSaveId`, Field-only).  
- Member id semantics are defined by **saves you already shipped**. Engine majors may change the binary shell, but **do not** "migrate" by renumbering LocalSaveId. Use a new id + load-time branch to backfill.  
- Primary semantics follow 1.4.5 source; this page URL stays fixed at `save-system/SaveableFieldAttribute`.

## ↑ Parent Navigation

- [save-system area](./) - module index for this page  
- [API directory](../) - full API entry  
- [Save system architecture](../../../architecture/save-system) - SaveManager and saveable data  
- [Crash Boundaries §1](../../../architecture/crash-boundaries) - SaveId / SyncData boundaries  
- [Doc contract](../../../architecture/doc-contract) - deep-page quality standard  

## ↔ Sibling Navigation

| Page | Relationship |
|------|--------------|
| [SaveablePropertyAttribute](../SaveablePropertyAttribute) | Property slots; needs getter/setter |
| [SaveableTypeDefiner](../SaveableTypeDefiner) | Register types and containers; id ranges |
| [SaveableRootClassAttribute](../SaveableRootClassAttribute) | Root / type-level SaveId |
| [SaveManager](../SaveManager) | Top-level save API |
| [IDataStore](../../campaign-ext/IDataStore) | Behavior string-key channel |
| [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) | `SyncData` hook |
| [FieldDefinition](../FieldDefinition) | Runtime field definition wrapper |

## See also

- [Save system practical guide](../../../guide/save-system-guide)  
- [AutoGeneratedSaveManager](../AutoGeneratedSaveManager)  
- [Module system](../../../architecture/module-system) - when Definers / Behaviors register  
- [CampaignEvents](../../campaign-ext/CampaignEvents) - world events; different channel from save  

---

## Page QA checklist

| # | Check | Status |
|---|--------|--------|
| 1 | Mental model: LocalSaveId slot, not field name | Yes |
| 2 | vs IDataStore.SyncData split | Yes |
| 3 | CollectFields duplicate id → error | Yes |
| 4 | Id stable / no reuse / no type swap | Yes |
| 5 | Real example + wrong contrast | Yes |
| 6 | Parent/Sibling → SaveManager / IDataStore / crash boundaries | Yes |
| 7 | No "is a public type" boilerplate | Yes |
