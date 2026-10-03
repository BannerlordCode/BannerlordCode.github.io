---
title: "ActionVisualOrder"
description: "An adapter that wraps an arbitrary C# delegate into one slot on the battlefield order bar. Sealed, 39 lines, and not constructed anywhere in the 1.4.5 tree — a pure extension point. All four virtuals are answered up front; the only freedom left to you is what the command does."
---
# ActionVisualOrder

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public sealed class ActionVisualOrder : VisualOrder`  
**Base:** `VisualOrder`  
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/ActionVisualOrder.cs`

## Overview

Every button on the battlefield order bar is backed by a `VisualOrder`. Vanilla ships a concrete subclass per command — charge, advance, volleys, and so on. But each new command means a new file and four overridden abstract members, which is heavy for a mod.

`ActionVisualOrder` is the **adapter** for exactly that: it treats a delegate of yours as the command. The file is 39 lines, the class is `sealed`, and internally it does only four things:

```csharp
public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters);
```

That nested delegate type *is* the whole contract — it hands you both the `OrderController` and the `VisualOrderExecutionParameters`, so you can read the currently selected formations as well as the execution context.

All four overrides are straightforward forwarding:

| Override | Implementation | Meaning |
| --- | --- | --- |
| `GetName(OrderController)` | `return _name;` | The caption is whatever `TextObject` you passed to the constructor; **`orderController` is ignored**. |
| `IsTargeted()` | `return false;` | Declares "this command needs no player-specified target". The order bar therefore skips the aiming/targeting flow. |
| `ExecuteOrder(OrderController, VisualOrderExecutionParameters)` | `_orderAction?.Invoke(orderController, executionParameters);` | The single real behaviour. Both parameters are forwarded verbatim to your delegate. |
| `OnGetFormationHasOrder(Formation)` | `return false;` | Declares "this command does not constitute an issued order at formation level". |

## Mental Model

Read it as **"a stateless button adapter on the order bar: it answers the four mandatory questions up front and leaves the only real freedom — what the command does — to the caller"**:

- **Who news it up.** **Nobody in vanilla.** Searching all 6,222 `.cs` files under `Bannerlord.Source/bin/**`, the name `ActionVisualOrder` appears only in its own file — `ActionVisualOrder.cs:5` (class declaration), `:13` (constructor), `:7` (nested delegate) — **with no `new` anywhere**. It is 100% an extension point for mods, which also means **your first `new ActionVisualOrder(...)` is the first construction site in this source tree**, with no in-tree precedent to copy.
- **Who holds the reference.** Your order-bar container — normally the layer that owns an `OrderController` and maintains a list of `VisualOrder`s. Vanilla hangs its order lists off the `OrderController` / tactical-menu machinery, assembled by the mission-side handlers and view models.
- **What it binds to.** It exposes no `[DataSourceProperty]` at all. The order-bar widget reads the base class's `IconId` (→ `StringId`), `GetName(...)`, and the `OrderState` returned by `GetActiveState(orderController)`. **All of those are virtual methods and a property, so a prefab cannot bind them directly** — the order bar is not an ordinary VM list; it calls these methods itself.
- **When it is disposed.** **It isn't — there is no `OnFinalize`, no event registration, and no owned resources.** `sealed` plus three readonly fields (one delegate, one `TextObject`) makes it a pure value object after construction. Its lifetime is exactly as long as your list holds it.
- **A genuinely counter-intuitive consequence: this button never lights up.** The base class's `VisualOrder.GetActiveStateAux` walks every selected formation, counting `num` for "has an answer" (`flag.HasValue`) and `num2` for `flag == true`; `num2 == 0` → `OrderState.Default`, `num2 < num` → `PartiallyActive`, `num2 == num` → `Active`. `ActionVisualOrder` always returns `false` (not `null`), so `num2` is permanently 0 and **the result is `OrderState.Default` no matter how many times you execute it**. If you need a "pressed and now lit" look, you must write your own `VisualOrder` subclass whose `OnGetFormationHasOrder` returns `true`.
- **`GetName` ignores `orderController`.** You cannot do "show a different name depending on the selected troop type". A dynamic caption requires your own subclass.
- **`IsTargeted() == false` is a hard constraint.** The `executionParameters` your delegate receives will never contain a player-picked target. A button that needs target interaction does not belong in this class.
- **Misuse #1**: treating it as a carrier of command *state*. It is **stateless** — no issued/not-issued notion, no cooldown, no availability check. Availability logic belongs inside your delegate or in the outer container.
- **Misuse #2**: reading `sealed` as "unusable". `sealed` blocks **inheritance** (so nobody can break the adapter's semantics), not construction. To extend behaviour, put it in the delegate.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| `OrderActionDelegate` (nested delegate) | `public delegate void OrderActionDelegate(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | The class's entire outward interface. Invoked when the command runs, with the same two parameters `ExecuteOrder` receives. |
| Constructor | `public ActionVisualOrder(string iconId, OrderActionDelegate orderAction, TextObject name)` | Three mandatory inputs: icon/string id, behaviour delegate, display name. Note the parameter is named `iconId` while the base constructor's is `stringId` — they feed the same `StringId` property, only the naming differs. |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | Returns the stored `_name` verbatim and **never touches** the incoming `orderController`. The order bar therefore cannot show a dynamic caption. |
| `IsTargeted` | `public override bool IsTargeted()` | Always `false`. The order bar skips target selection because of this, and your delegate consequently receives no picked target. |
| `ExecuteOrder` | `public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | The only behaviour: `_orderAction?.Invoke(orderController, executionParameters)`. Null-conditional, so a null delegate is a silent no-op rather than a crash. |
| `OnGetFormationHasOrder` | `protected override bool? OnGetFormationHasOrder(Formation formation)` | Always `false`. The direct consequence is that `GetActiveState` can only ever yield `OrderState.Default` — the button never renders as Active or PartiallyActive. |

## Real Example

Constructing an order slot — the only real use of this type:

```csharp
using System.Collections.Generic;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual;

public class MyOrderList
{
    private readonly List<VisualOrder> _orders = new List<VisualOrder>();

    public void AddGatherOrdersCommand()
    {
        VisualOrder gather = new ActionVisualOrder(
            "my_gather_icon",
            ExecuteGather,
            new TextObject("{=MyGather}Gather"));

        _orders.Add(gather);
    }

    private void ExecuteGather(OrderController orderController, VisualOrderExecutionParameters executionParameters)
    {
        for (int i = 0; i < orderController.SelectedFormations.Count; i++)
        {
            Formation formation = orderController.SelectedFormations[i];

            // Hand this formation back to the AI so it reorganises itself.
            formation.SetControlledByAI(true);
        }
    }
}
```

Confirming it never highlights, and acting on that fact (the direct consequence of returning `false` rather than `null`):

```csharp
using TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual;

public bool ShouldDimAfterUse(VisualOrder order, OrderController controller)
{
    // ActionVisualOrder's OnGetFormationHasOrder is always false, so num2 is always 0
    // and GetActiveStateAux can only ever return Default.
    return order.GetActiveState(controller) == OrderState.Active;
}
```

Doing your own availability check inside the delegate, since this layer carries no state at all:

```csharp
public void AddToggleShieldWallCommand()
{
    VisualOrder toggle = new ActionVisualOrder(
        "my_shield_wall_icon",
        (controller, parameters) =>
        {
            if (controller.SelectedFormations == null || controller.SelectedFormations.Count == 0)
            {
                MBInformationManager.ShowHint("Select a formation first.");
                return;
            }

            for (int i = 0; i < controller.SelectedFormations.Count; i++)
            {
                Formation formation = controller.SelectedFormations[i];
                bool anyMounted = formation.HasUnitsWithCondition(a => a.IsMounted);

                MBInformationManager.ShowHint(
                    "Formation " + i + ": units=" + formation.CountOfUnits + ", mounted=" + anyMounted);
            }
        },
        new TextObject("{=MyShieldWall}Toggle Shield Wall"));

    _orders.Add(toggle);
}
```

## Risks and crash boundaries

- **Stateless, therefore unable to express "already issued / no longer allowed".** `OnGetFormationHasOrder` being permanently `false` is the most direct evidence. Cooldowns, once-per-battle, resource costs — all of that must live in your delegate or the outer container; the order bar will not render any disabled state for you.
- **`IsTargeted() == false` cannot be bypassed.** `sealed` means you cannot change that return value. Any command needing a second player click on a target is impossible with `ActionVisualOrder`.
- **No exception isolation.** `_orderAction?.Invoke(...)` is a bare call. An exception thrown by your delegate propagates straight out through `ExecuteOrder` into the order bar's call stack. Command handlers should try/catch themselves, or one mod command's crash takes down the whole combat UI.
- **`sealed`.** You cannot inherit to add behaviour. Write your own `VisualOrder` subclass instead.
- **No lifecycle, nothing to release.** No `OnFinalize`, no event subscriptions, no native handles. Caching an instance in a static field **cannot** leak anything (three readonly references to ordinary objects). This is the opposite of most view models in this bucket.
- **Serialization**: none. No `SyncData`, no `IDataStore` involvement. The order list is pure presentation.
- **`TextObject` reference capture**: `_name` stores a `TextObject` rather than a string snapshot, unlike `ActionOptionDataVM`, which converts its caption to a string. A language switch re-evaluates the `TextObject` itself, but **any cache you built by calling `GetName()` and storing the string goes stale** — rebuild it on language change.
- **Native boundary**: none here. Pure managed. It does live in the mission context, where the downstream of `OrderController` / `VisualOrderExecutionParameters` touches `Bannerlord.Native`, but that is inside your delegate; the class itself does not.
- **Cross-version**: the two parameter types of `OrderActionDelegate`, the three `OrderState` values (`Default` / `PartiallyActive` / `Active`), and the base class's `GetActiveStateAux` counting algorithm are all v1.4.5 shapes. If upstream changes `VisualOrder`'s abstract member set, this class fails to compile.

## Dependencies

- ↑ Base class: [VisualOrder](../VisualOrder) — supplies `StringId`, `IconId`, `GetActiveState`, and the four abstract members this class answers
- ↔ Sibling: [VisualOrderExecutionParameters](../VisualOrderExecutionParameters) — the delegate's second parameter, the context of the command execution
- ↔ Sibling: [OrderState](../OrderState) — `Default` / `PartiallyActive` / `Active`, which drive the order bar's highlight
- → Command context: `OrderController` (zh: [../../mission-ext/OrderController](../../mission-ext/OrderController)) — the delegate's first parameter, source of `SelectedFormations`
- → Formation: [Formation](../../mission/Formation) — parameter type of `OnGetFormationHasOrder`
- → Text: [GameTextManager](../../core-extra/GameTextManager)
