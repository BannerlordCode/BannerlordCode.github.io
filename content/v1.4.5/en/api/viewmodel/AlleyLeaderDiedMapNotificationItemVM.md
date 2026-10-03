---
title: "AlleyLeaderDiedMapNotificationItemVM"
description: "The map-notification row for \"one of your alleys lost its leader\". It does exactly one thing: open an explainer whose affirmative button jumps to the clan screen and whose negative button dismisses itself — and it deliberately subscribes to no events at all across its 37 lines."
---
# AlleyLeaderDiedMapNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AlleyLeaderDiedMapNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/AlleyLeaderDiedMapNotificationItemVM.cs`

## Overview

An alley is a clan's foothold inside a town. When its leader dies or it runs short on troops, the alley enters a countdown: it is abandoned after `Campaign.Current.Models.AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath` days, and every troop still inside is lost. This class is the row that tells the player.

It is **the simplest notification item in this bucket** — 37 lines, a constructor and two private methods, and **not a single `AddNonSerializedListener` anywhere in the class**. The constructor does three things:

```csharp
_alley = data.Alley;
base.NotificationIdentifier = "alley_leader_died";
_onInspect = CreateAlleyLeaderDiedPopUp;
```

Clicking routes to `CreateAlleyLeaderDiedPopUp()`, which assembles two `TextObject`s with `{=hash}` keys (title and body), fills the `DAYS` variable with `(int)Campaign.Current.Models.AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath.ToDays`, and raises a two-button `InquiryData`:

- **Affirmative**, "Learn more" → `OpenClanScreenAfterAlleyLeaderDeath()`: if both `NavigationHandler` and `_alley` are present, `NavigationHandler.OpenClan(_alley)` jumps to the clan screen, then `ExecuteRemove()` dismisses the notification.
- **Negative**, `str_dismiss` → straight to `base.ExecuteRemove`.

## Mental Model

Read it as **"a one-shot explainer dialog plus one navigation button, with no opinion about its own survival"**:

- **Who news it up.** `MapNotificationVM`, which registers `_itemConstructors.Add(typeof(AlleyLeaderDiedMapNotification), typeof(AlleyLeaderDiedMapNotificationItemVM))` at line 122 and builds it at line 199 via `Activator.CreateInstance(_itemConstructors[type], data)`. **Not replaceable from code** — only the notification data is under your control.
- **Who holds the reference.** `MapNotificationVM`'s notification item list, which calls `OnFinalize()` when the item is discarded.
- **What it binds to.** Only the inherited surface (`TitleText`, `DescriptionText`, `NotificationIdentifier`, `IsFocused`, `RemoveInputKey`). This class adds no `[DataSourceProperty]` of its own.
- **When it is disposed.** The list calls `OnFinalize()` on discard, and this class **does not override it**. Because it registers no listeners, **there is no leak path** — that is the key contrast with `AlleyUnderAttackMapNotificationItemVM` and `ArmyCreationNotificationItemVM` in the same directory.
- **A genuine vanilla quirk: when `NavigationHandler` is null, the notification never disappears.** Look at `OpenClanScreenAfterAlleyLeaderDeath`:

  ```csharp
  if (base.NavigationHandler != null && _alley != null)
  {
      base.NavigationHandler.OpenClan(_alley);
      ExecuteRemove();
  }
  ```

  `ExecuteRemove()` is **inside the `if`**. `NavigationHandler` is injected via `MapNotificationItemBaseVM.SetNavigationHandler(...)`; in a headless context, at campaign end, or when the notification is constructed outside the map screen it can be null — and then pressing "Learn more" does nothing at all: no navigation, and no removal. The row sits there until something else clears it.
- **No event subscriptions means no auto-dismissal.** Unlike the war/alliance notifications nearby, this row will **not** vanish because the alley was repaired, abandoned, or because the player did something else. It goes away only when the player dismisses it, or when `MapNotificationVM` clears the whole panel on a scene change. Making it disappear once the alley is staffed again means writing your own `CampaignEvents` listener.
- **Copy is hard-coded English `TextObject`s, not `GameTexts` keys.** Both texts are inline `new TextObject("{=6QoSHiWC}...")`; only the cancel button uses `GameTexts.FindText("str_dismiss")`. Exactly one variable, `{DAYS}`, is filled programmatically. Localizing the body means replacing both `TextObject`s.
- **Typical misuse**: treating it as an alley *status* widget. It reads no alley state at all; `_alley` is merely a handle used for navigation, and the abandonment countdown was frozen into a string the moment the dialog was built.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public AlleyLeaderDiedMapNotificationItemVM(AlleyLeaderDiedMapNotification data)` | Called reflectively. Stores `data.Alley`, sets `NotificationIdentifier = "alley_leader_died"`, and points `_onInspect` at the dialog method. **Registers no events.** |
| `_onInspect` (base `protected Action`) | assigned in the constructor | Runs on player click: calls `CreateAlleyLeaderDiedPopUp()`. |
| `CreateAlleyLeaderDiedPopUp` | `private void CreateAlleyLeaderDiedPopUp()` | Builds the title/body `TextObject`s, fills `DAYS` from `AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath.ToDays`, and raises a two-button `InformationManager.ShowInquiry`: affirmative → `OpenClanScreenAfterAlleyLeaderDeath`, negative → `base.ExecuteRemove`. |
| `OpenClanScreenAfterAlleyLeaderDeath` | `private void OpenClanScreenAfterAlleyLeaderDeath()` | Under a two-condition guard (`NavigationHandler != null` and `_alley != null`) calls `NavigationHandler.OpenClan(_alley)` then `ExecuteRemove()`. **When the guard fails it does not remove the notification either** — that is vanilla behaviour, not an oversight in this description. |
| `_alley` | `private Alley _alley` | The only field, taken from `data.Alley` at construction. Note it is **not `readonly`**, and is never null-checked on the storage side. |
| `NotificationIdentifier` | base property, set to `"alley_leader_died"` here | Selects which icon/layout resource set the map notification uses. It is the only "identity" this class exposes. |

## Real Example

Reproducing its input — the countdown number should be frozen the moment the dialog opens:

```csharp
using TaleWorlds.CampaignSystem.Settlements;

// Same model value CreateAlleyLeaderDiedPopUp reads.
public string BuildAbandonCountdownText(Alley alley)
{
    int days = (int)Campaign.Current.Models.AlleyModel
        .DestroyAlleyAfterDaysWhenLeaderIsDeath.ToDays;

    TextObject body = new TextObject(
        "{=FzbeSkBb}One of your alleys has lost its leader or is lacking troops. " +
        "It will be abandoned after {DAYS} days have passed.");
    body.SetTextVariable("DAYS", days);
    return body.ToString();
}
```

Reproducing its flawed navigation guard — and seeing clearly what the `if` around `ExecuteRemove()` costs you:

```csharp
public bool TryOpenClanFromNotification(Alley alley)
{
    if (NavigationHandler == null || alley == null)
    {
        // Same as vanilla: no navigation happens.
        // Note vanilla also does not ExecuteRemove() here, so the row sticks around.
        return false;
    }

    NavigationHandler.OpenClan(alley);
    ExecuteRemove();
    return true;
}
```

Writing your own event-driven version so the row disappears once the alley is staffed again — precisely what vanilla declines to do:

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public class MyAlleyLeaderDiedNotificationItemVM : AlleyLeaderDiedMapNotificationItemVM
{
    public MyAlleyLeaderDiedNotificationItemVM(AlleyLeaderDiedMapNotification data)
        : base(data)
    {
        // Vanilla deliberately skips this step. Adding it makes the row withdraw
        // itself as soon as the player reaches the town.
        // SettlementEntered's delegate signature is (MobileParty, Settlement, Hero).
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnEnteredSettlement);
    }

    private void OnEnteredSettlement(MobileParty party, Settlement settlement, Hero hero)
    {
        ExecuteRemove();
    }

    public override void OnFinalize()
    {
        base.OnFinalize();

        // Having inherited an event, you must detach it yourself — otherwise every
        // settlement entry runs one more dead closure.
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

## Risks and crash boundaries

- **`ExecuteRemove()` is trapped inside the null check.** This is the single most memorable defect of the type: with a null `NavigationHandler`, pressing the affirmative button has no effect whatsoever and the notification is not dismissed either. If your mod scenario (headless, campaign end, outside the map screen) can hit that state, you accumulate an undismissable dead row on the panel.
- **`_alley` has no null check and is not `readonly`.** The `_onInspect` closure dereferences it directly — `NavigationHandler.OpenClan(_alley)` here, `_alley.Settlement.Position` in the sibling class. The data side guarantees `data.Alley` is non-null, but any code path that builds notification data with a null `Alley` produces an NRE on click.
- **The lifecycle is clean precisely because nothing is registered.** No `OnFinalize` override, no `CampaignEvents`, no `Game.Current.EventManager`. The cost is that it **never dismisses itself** — add auto-dismissal by subclassing and unbinding properly (see the example above).
- **Serialization**: none. No `SyncData`, no `IDataStore` contact. Nothing about "this alley notification is showing" reaches the savegame; after loading, the campaign side re-pushes it.
- **The abandonment countdown is a snapshot.** `DAYS` is read from the model at click time and immediately stringified. If a mod changes that model value while the row is sitting on the panel, the displayed text does not update.
- **`NavigationHandler` is injected externally.** The base class `MapNotificationItemBaseVM.SetNavigationHandler(INavigationHandler)` is called by `MapNotificationVM`. This class is purely a consumer and must never assume the handler is live during construction.
- **Body copy is hard-coded English.** Only `str_dismiss` goes through `GameTexts`. Localized builds show an untranslated title and body.
- **Native boundary**: none. Pure managed.
- **Cross-version**: `AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath` and the `INavigationHandler.OpenClan(Alley)` extension are both v1.4.5 shapes. `OpenClan` has six overloads (no-arg / `Hero` / `PartyBase` / `Settlement` / `Workshop` / `Alley`); passing the wrong type silently resolves to a semantically different one.

## Dependencies

- ↑ Base class: [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) — supplies `_onInspect`, `ExecuteRemove()`, `NavigationHandler`, `NotificationIdentifier`
- ↔ Sibling: [MapNotificationVM](../MapNotificationVM) — owner of the type constructor table and the only construction entry point
- ↔ Sibling: [AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM) — the other alley notification, but that one **does** subscribe to `SettlementEntered`; reading the pair side by side makes the lifecycle difference obvious
- → Data source: `AlleyLeaderDiedMapNotification` (zh: [../../campaign-ext/AlleyLeaderDiedMapNotification](../../campaign-ext/AlleyLeaderDiedMapNotification), en: [../../campaign/AlleyLeaderDiedMapNotification](../../campaign/AlleyLeaderDiedMapNotification))
- → Alley and settlement: [Settlement](../../campaign/Settlement), `TaleWorlds.CampaignSystem.Settlements.Alley`
- → Dialog: [InformationManager](../../core-extra/InformationManager)
- → Text lookup: [GameTextManager](../../core-extra/GameTextManager)
- → Event source: [CampaignEvents](../../campaign-ext/CampaignEvents)
