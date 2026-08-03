---
title: "Behaviors Family"
description: "Campaign behavior lifecycle, event subscriptions, tick ownership, and save synchronization."
---

# Behaviors Family

**One-sentence role:** A campaign behavior is a long-lived coordinator that subscribes to campaign events, schedules work, and owns the lifecycle of related issues or quests.

## Mental model and reading order

Read [CampaignBehaviorBase](../CampaignBehaviorBase), then [CampaignEventReceiver](../CampaignEventReceiver) and [CampaignEvents](../CampaignEvents). Use [CampaignGameStarter](../CampaignGameStarter) to understand registration before studying a concrete behavior such as [AgingCampaignBehavior](../AgingCampaignBehavior).

## When to use

Use a behavior for campaign-lifetime coordination. Use an action for one mutation and a model for one calculation. Do not put behavior state in a static singleton or subscribe repeatedly from a tick callback.

## Dependency map

- Upstream: [Campaign](../../campaign/Campaign) and `CampaignGameStarter` registration.
- Downstream: events, actions, models, issues, quests, and save synchronization.
- Siblings: [Actions](../actions), [Issues](../issues), and [Quests](../quests).

## Real entry points

```csharp
public sealed class MyBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents() { /* subscribe once */ }
    public override void SyncData(IDataStore dataStore) { /* save state */ }
}
```

Register the behavior from the module's campaign startup hook; the engine owns construction and event timing after registration.

## Risk boundaries

Unsubscribe/guard event handlers during teardown, keep `SyncData` compatible with old saves, and never assume `Campaign.Current` exists during module loading. Duplicate registration causes duplicate rewards and hard-to-reproduce save drift.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Actions](../actions) · [Issues](../issues) · [Quests](../quests)
- [Related: Campaign events](../CampaignEvents)
