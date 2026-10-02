---
title: "Save System — persisting custom data"
description: "How v1.4.7 SaveManager and SaveableTypeDefiner register types, the SaveContext/LoadContext lifecycle, and the difference between CampaignBehaviorBase.SyncData and the global save system."
---
# Save System — persisting custom data

## Mental model

Bannerlord has **two unrelated** persistence mechanisms. Picking the wrong one means losing your
fields:

| Mechanism | What it stores | Entry point | When it runs |
| --- | --- | --- | --- |
| **Behaviour sync (light)** | Instance fields of one `CampaignBehaviorBase` subclass | `IDataStore` / `SyncData` | At campaign start and end |
| **Global save system (heavy)** | Arbitrary object graphs, cross-campaign, cross-mod, with type IDs and conflict resolution | `SaveManager` + `SaveableTypeDefiner` | When the game decides to save |

**Default to the first one.** Reach for the second only when the data does not belong to any
behaviour, must outlive the campaign, or has to be shared with another mod.

## Light path: SyncData

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    private int _kills;
    private bool _recruitedGuide;
    private string _lastBannerName = "";

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("kills", ref _kills);
        dataStore.SyncData("recruitedGuide", ref _recruitedGuide);
        dataStore.SyncData("lastBannerName", ref _lastBannerName);
    }
}
```

Rules:

- Use `nameof` or a constant for the key. Renaming a literal means losing the data.
- `ref` parameter types are constrained by the save format: `bool`, `int`, `float`, `string` and
  enums are safe; custom class references are not — flatten to a `string` or an `int` index.
- **Load ordering is unstable.** `SyncData` runs during deserialization while other behaviours may
  still be unrestored. Anything depending on their state belongs in `OnAfterGameLoaded`.

## Heavy path: SaveableTypeDefiner + SaveManager

### The two contexts

| Type | Namespace | Role |
| --- | --- | --- |
| `SaveContext` | `TaleWorlds.SaveSystem.Save` | Write side. Walks the object graph, calls your fill/write hooks |
| `LoadContext` | `TaleWorlds.SaveSystem.Load` | Read side. Rebuilds objects by type ID and refills fields |
| `SaveManager` | `TaleWorlds.SaveSystem` | Static façade: `Save` / `Load` / `LoadMetaData` |
| `ISaveDriver` | `TaleWorlds.SaveSystem` | Abstract file backend (local file, memory, cloud) |

`SaveManager`'s public surface is small, and these are the members worth knowing:

```csharp
public static void       InitializeGlobalDefinitionContext();
public static List<Type> CheckSaveableTypes();
public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver);
public static MetaData   LoadMetaData(string saveName, ISaveDriver driver);
public static LoadResult Load(string saveName, ISaveDriver driver);
public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize);
public const string SaveFileExtension = ".sav";
```

`LoadMetaData` reads metadata without building objects. **Migration code should call
`LoadMetaData` first, decide from the version, then load** — rather than catching exceptions during
a load.

### Registering types: SaveableTypeDefiner

The save system indexes types by **numeric type ID**, so every type you want saved must be
registered explicitly and its ID must be unique across the base game and every mod.
`SaveableTypeDefiner` offers 24 protected methods, grouped by declaration kind:

| Group | Methods |
| --- | --- |
| Basic types | `AddBasicTypeDefinition(Type, int saveId, IBasicTypeSerializer)` |
| Classes | `AddClassDefinition(Type, int, IObjectResolver)` · `AddClassDefinitionWithCustomFields(Type, int, IEnumerable<Tuple<string, short>>, IObjectResolver)` |
| Root objects | `AddRootClassDefinition(Type, int, IObjectResolver)` |
| Structs | `AddStructDefinition(Type, int, IObjectResolver)` · `AddStructDefinitionWithCustomFields(...)` |
| Interfaces | `AddInterfaceDefinition(Type, int)` |
| Enums | `AddEnumDefinition(Type, int, IEnumResolver)` |
| Conflict resolution | `AddConflictResolver(int saveId, IConflictResolver)` |
| Generics / containers | `ConstructGenericClassDefinition(Type)` · `ConstructGenericStructDefinition(Type)` · `ConstructContainerDefinition(Type)` |

The grouped virtuals are `DefineBasicTypes()`, `DefineClassTypes()`, `DefineStructTypes()`,
`DefineInterfaceTypes()`, `DefineEnumTypes()`, `DefineRootClassTypes()`,
`DefineConflictResolvers()`, `DefineGenericClassDefinitions()`,
`DefineGenericStructDefinitions()`, `DefineContainerDefinitions()`. Override the relevant one and
add your types.

```csharp
public class MySaveableDefiner : SaveableTypeDefiner
{
    // saveBaseId must sit in your own range, disjoint from the game and other mods
    public MySaveableDefiner() : base(20000) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(MyCustomData), 20001);
    }

    protected override void DefineStructTypes()
    {
        AddStructDefinition(typeof(MyCustomStat), 20002);
    }
}
```

### saveId collisions are the most common accident

If two mods pick the same ID, one is silently deserialized as the other type during load, and the
save "changes for no reason". `SaveManager.ShouldResolveConflicts()` and `CheckSaveableTypes()`
exist to surface that at load time. **Call both once during development** — far cheaper than
debugging it in a user's save.

## Decision flow

```text
Does the data only get used by one CampaignBehavior?
  └─ yes → SyncData (99% of cases)
  └─ no ↓
Does it need to outlive a campaign, be shared between mods, or save a whole object graph?
  └─ yes → SaveableTypeDefiner + SaveManager
  └─ no  → reconsider SyncData: it only constrains field *types*, not logic
```

## See also

- ↔ [Architecture hub](../) · [Module System](../module-system) — how behaviours get registered
- ↘ [UI Stack](../ui-stack)
- ↑ `api/save-system/` and `api/campaign-ext/` have no bucket index in this tree. `api/save-system/` has no English directory at all; its three pages (`SaveManager`, `SaveContext`, `LoadContext`) are Chinese-only. `api/campaign-ext/` holds two hand-written English pages, `MBObjectBase` and `MBObjectManager`. See [the gap list](../../../GAPS).