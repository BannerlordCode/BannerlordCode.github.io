---
title: "CampaignBehaviorBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignBehaviorBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/CampaignBehaviorBase](/versions/CampaignBehaviorBase)
<!-- END BREADCRUMB -->
# CampaignBehaviorBase

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** abstract class (implements `ICampaignBehavior`)

The abstract base class for all campaign behaviors and the primary entry point for mods to inject campaign logic. Mods subclass it, override `RegisterEvents` to subscribe to campaign events, and override `SyncData` to persist save data.

## Overview

`CampaignBehaviorBase` implements the `ICampaignBehavior` interface and is the standard base class for "behavior" components in Bannerlord's campaign system. A behavior is a unit of logic that loads with the campaign and is saved with the game: in `RegisterEvents` you attach private handler methods to events on `CampaignEvents` (daily ticks, new game creation, save loading, etc.), and in `SyncData` you read and write the fields that must be saved via `IDataStore.SyncData<T>`.

The base class itself exposes only one readonly field (`StringId`), two constructors, two abstract methods that must be overridden (`RegisterEvents`, `SyncData`), and one static lookup helper (`GetCampaignBehavior<T>`). Behavior instances are registered into the campaign via `CampaignGameStarter.AddBehavior` / `CampaignBehaviorManager.AddBehavior`, and retrieved via `Campaign.Current.GetCampaignBehavior<T>()`.

> Note: `OnNewGameCreated` and `OnGameLoaded` are **not** virtual override points on the base class. They are event handler methods that the mod defines and subscribes to inside `RegisterEvents` via `CampaignEvents.OnNewGameCreatedEvent` / `CampaignEvents.OnGameLoadedEvent`. The only abstract members you must override on the base class are `RegisterEvents` and `SyncData`.

## Mental Model

Treat `CampaignBehaviorBase` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `StringId` | `string` (readonly) | String identifier for the behavior, set by the constructor and used to identify the behavior within the behavior manager |

## Constructors

### CampaignBehaviorBase(string stringId)

```csharp
public CampaignBehaviorBase(string stringId)
```

Initializes the behavior with the given `stringId`, assigning it to the readonly `StringId` field. Use this when you need a stable identifier that differs from the class name.

### CampaignBehaviorBase()

```csharp
public CampaignBehaviorBase()
```

Parameterless constructor that sets `StringId` to `this.GetType().Name` (the derived class name). This is sufficient for most mod behaviors.

## Main Methods

### RegisterEvents

```csharp
public abstract void RegisterEvents();
```

The single abstract method declared by `ICampaignBehavior` and **must be overridden**. Attach the behavior's event handler methods to events on `CampaignEvents` here. Subscribe with `AddNonSerializedListener(this, ...)` so the behavior instance is registered as the listener.

Typical events to subscribe to (all on `CampaignEvents`, with a `CampaignGameStarter` parameter where noted):

- `OnNewGameCreatedEvent` — fired when a new game is created; used to initialize behavior state.
- `OnGameLoadedEvent` — fired after a save is loaded; used to rebuild runtime references after deserialization.
- `DailyTickEvent` / `DailyTickHeroEvent` / `DailyTickSettlementEvent` / `DailyTickPartyEvent` — the various daily tick events.

### SyncData

```csharp
public abstract void SyncData(IDataStore dataStore);
```

**Must be overridden**. Serialize/deserialize the fields that must be saved with the game here via `dataStore.SyncData<T>(string key, ref T data)`. `SyncData<T>` returns `bool` — `true` when loading a save and `false` when writing one — which can be used to null-correct deserialized results after a load.

Only types the save system can handle may be persisted (primitives, `CampaignTime`, `MBObjectBase`-derived objects, etc.). The behavior itself is tracked automatically by the save system as its host; you do not (and cannot) save the whole behavior object as a root object.

### GetCampaignBehavior&lt;T&gt;

```csharp
public static T GetCampaignBehavior<T>()
```

Convenience lookup equivalent to `Campaign.Current.GetCampaignBehavior<T>()`. Returns the registered behavior instance of type `T` in the current campaign. Use it to retrieve your behavior from other code in order to read or write its state.

## Lifecycle

The typical lifecycle of a mod behavior is:

1. **Registration**: during game initialization (new game creation / save loading) the behavior is added to the campaign via `CampaignGameStarter.AddBehavior(new MyBehavior())`.
2. **Event wiring**: `RegisterEvents` is called and the behavior attaches its handlers to `CampaignEvents`.
3. **Saving**: when writing a save, `SyncData` is called and the behavior writes its fields back to `dataStore`.
4. **Loading**: when reading a save, `SyncData` is called to rebuild the fields, then the `OnGameLoadedEvent` handler fires to rebuild runtime references.

## Usage Example

```csharp
var implementation = new CustomCampaignBehaviorBase();
```

Registering the behavior (during game initialization, e.g. when your mod's module callback has a `CampaignGameStarter`):

```csharp
// gameStarter is the CampaignGameStarter instance obtained during initialization.
gameStarter.AddBehavior(new MyTickCounterBehavior());
```

Retrieving the behavior from other code:

```csharp
var behavior = CampaignBehaviorBase.GetCampaignBehavior<MyTickCounterBehavior>();
// or equivalently:
// var behavior = Campaign.Current.GetCampaignBehavior<MyTickCounterBehavior>();
if (behavior != null)
{
    int ticks = behavior.CurrentTickCount;
}
```

## See Also

- [Campaign](./Campaign)
- [Settlement](./Settlement)
- [PartyTemplate](./PartyTemplate)
