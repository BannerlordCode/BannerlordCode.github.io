---
title: "SiegeStrategy"
description: "A registered siege-strategy object whose identity and localized description guide siege action models."
---
# SiegeStrategy

**Namespace:** `TaleWorlds.CampaignSystem.Siege`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class SiegeStrategy : MBObjectBase`  
**Base:** [`MBObjectBase`](../../core/MBObjectBase)  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeStrategy.cs`

## Responsibility

`SiegeStrategy` is the object-system record that names and describes a siege priority; it is later selected on an `ISiegeEventSide` and interpreted by `SiegeStrategyActionModel`.

## Mental model

This type is data, not the AI algorithm that decides which engine action to perform. `DefaultSiegeStrategies` creates registered objects with stable string IDs, initializes their localized `Name` and `Description`, and exposes the built-in set. The active event side stores one strategy reference; the siege action model reads that reference when `SiegeEvent.AdvanceStrategy` asks for a logical action.

For most mods, read the built-in records or assign one of them to a live side at a deliberate preparation point. Do not treat `Initialize` as a per-siege reset, and do not make an unregistered `SiegeStrategy` with a colliding ID. Object registration and save identity matter because `SiegeStrategy` derives from `MBObjectBase` and is part of the campaign object graph.

## Registration and dependency flow

```text
DefaultSiegeStrategies constructor
  -> RegisterPresumedObject(new SiegeStrategy(stringId))
  -> Initialize(TextObject name, TextObject description)
  -> DefaultSiegeStrategies.PreserveStrength / PrepareAgainstAssault / CounterBombardment / PrepareAssault / BreachWalls / WearOutDefenders / Custom
SiegeEvent side
  -> ISiegeEventSide.SiegeStrategy
  -> Campaign.Current.Models.SiegeStrategyActionModel
  -> SiegeEvent.DoSiegeAction
```

`All` reads `Campaign.Current.AllSiegeStrategies`, so it reflects the current campaign's object registry. The built-in attacker choices are `PrepareAssault`, `BreachWalls`, `WearOutDefenders`, `PreserveStrength`, and `Custom`; defender choices are `PrepareAgainstAssault`, `CounterBombardment`, `PreserveStrength`, and `Custom`.

Related pages: [`DefaultSiegeStrategies`](../DefaultSiegeStrategies), [`ISiegeEventSide`](../ISiegeEventSide), [`SiegeEvent`](../SiegeEvent), and [`SiegeStrategyActionModel`](../SiegeStrategyActionModel). The base object lifecycle is covered by [`MBObjectBase`](../../core/MBObjectBase).

## Members

### `All`

`public static MBReadOnlyList<SiegeStrategy> All { get; }`

Returns `Campaign.Current.AllSiegeStrategies`. It is a campaign registry view, not a list of strategies that can be safely removed or replaced at runtime.

### `Name` and `Description`

`public TextObject Name { get; }`  
`public TextObject Description { get; }`

These values are assigned by `Initialize` and are used for localized UI text and strategy explanation. They do not change the action-scoring algorithm; that behavior belongs to the active siege models.

### `SiegeStrategy(string stringId)`

The public constructor supplies the object-system identity. In the shipped registration path, the ID is stable, for example `siege_strategy_breach_walls`, and the object is registered through `Game.Current.ObjectManager.RegisterPresumedObject` before initialization.

### `Initialize`

`public void Initialize(TextObject name, TextObject description)`

Calls `MBObjectBase.Initialize()`, assigns the two localized values, and calls `AfterInitialized()`. It is an object-registration lifecycle method. Calling it repeatedly on a live record is not a harmless label update, and calling it on a record that was never registered does not make it a valid campaign strategy.

## Real usage example

Reading the registered options needs no new object and follows the campaign registry:

```csharp
SiegeStrategy selected = DefaultSiegeStrategies.BreachWalls;

if (selected != null && PlayerSiege.PlayerSiegeEvent != null)
{
    ISiegeEventSide attacker = PlayerSiege.PlayerSiegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker);
    attacker.SetSiegeStrategy(selected);
}
```

The assignment changes the live attacker's strategy reference; it does not directly build an engine. The next strategy advance is interpreted through `Campaign.Current.Models.SiegeStrategyActionModel`.

## Failure and save boundaries

- Do not use `new SiegeStrategy("siege_strategy_breach_walls")` in a running campaign. It creates a second object identity instead of returning the registered record and can collide with the object manager.
- Do not call `Initialize` every time a siege starts. Built-in records are initialized during `DefaultSiegeStrategies` registration and reused across events.
- A strategy is only meaningful on a live `ISiegeEventSide`; changing a record's labels does not update a finalized event, and changing a side after finalization can retain references to cleared siege state.
- The public setter path only changes the selected strategy. It does not validate whether a strategy is appropriate for attacker or defender, so choose from the role-specific built-in lists.
- Keep `TextObject` values localized and stable. Replacing labels with transient UI objects makes saved object references and strategy displays difficult to reproduce.

## Navigation

- **Parent:** [Campaign API index](../)
- **Siblings:** [`DefaultSiegeStrategies`](../DefaultSiegeStrategies), [`SiegeEventManager`](../SiegeEventManager), [`SiegeEvent`](../SiegeEvent), [`SiegeState`](../SiegeState)
- **Related:** [`ISiegeEventSide`](../ISiegeEventSide), [`BesiegerCamp`](../BesiegerCamp), [`SiegeStrategyActionModel`](../SiegeStrategyActionModel), [`MBObjectBase`](../../core/MBObjectBase)
