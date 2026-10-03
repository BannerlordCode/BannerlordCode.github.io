---
title: "ActionOptionDataVM"
description: "The \"run it now\" button row of the generic options screen. It extends GenericOptionDataVM and overrides all six numeric virtuals into empty bodies — this row has no value, no dirty flag, and no save path; just a private ExecuteAction for Gauntlet to bind and an ActionName caption."
---
# ActionOptionDataVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class ActionOptionDataVM : GenericOptionDataVM`  
**Base:** `GenericOptionDataVM`  
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/ActionOptionDataVM.cs`

## Overview

The generic settings screen (`OptionsVM`) has several shapes of option: boolean toggles, numeric sliders, dropdown selections, and **"click and it runs" action buttons**. `ActionOptionDataVM` is the view model for the last one.

It does something particular to its base class `GenericOptionDataVM`: **it overrides all six numeric abstract members into empty bodies**.

| Base abstract member | This class's implementation |
| --- | --- |
| `public abstract void UpdateValue()` | `{}` |
| `public abstract void Cancel()` | `{}` |
| `public abstract bool IsChanged()` | `return false;` |
| `public abstract void SetValue(float value)` | `{}` |
| `public abstract void ResetData()` | `{}` |
| `public abstract void ApplyValue()` | `{}` |

That is not laziness — it is a direct consequence of the type contract: **this row has no value**. `IsChanged()` being permanently `false` matters most: it means the panel's Apply/OK button never sees "unsaved changes" because of this row, so an action row's effect is immediate and passes through no apply/revert cycle at all.

The only state genuinely belonging to this class is three things: a `private readonly Action _onAction`, a `private readonly TextObject _optionActionName`, and one `[DataSourceProperty] public string ActionName`.

The constructor hands the base a type tag — `OptionsVM.OptionsDataType.ActionOption` — and that single argument is what tells the generic options screen to render it as a button rather than as a control.

## Mental Model

Read it as **"a button shell around the generic options panel whose only real behaviour is a private method"**:

- **Who news it up.** `OptionsVM`, while converting a `TaleWorlds.MountAndBlade.Options.ActionOptionData` (an `IOptionData`) into a view row. Both call sites have the same shape: `return new ActionOptionDataVM(actionOptionData.OnAction, this, actionOptionData, name, optionActionName, textObject);`
- **Who holds the reference.** The option-row collection inside `OptionsVM`. The base `GenericOptionDataVM` constructor already captured the `OptionsVM optionsVM` and `IOptionData option` references; this class adds nothing.
- **What it binds to.** `ActionName`, the caption on the button. And — counter-intuitively — **`ExecuteAction` is `private`**. Gauntlet's data binding looks members up by name and is not bound by accessibility, so the prefab binds `ExecuteAction` directly. No public C# entry point can fire it.
- **When it is disposed.** Via the inherited `ViewModel` contract: `OptionsVM` calls `OnFinalize()` when the options screen closes. This class **does not override `OnFinalize`** and registers no events, so it carries no leak risk.
- **`_optionActionName` may legitimately be null.** `RefreshValues()` guards with `if (_optionActionName != null)`, and when null `ActionName` simply keeps its previous string (`null` right after construction). So the button caption **can be entirely empty** — that is vanilla's tolerance branch, not a defect.
- **The constructor calls `RefreshValues()` itself.** Unusual for this bucket, where most view models wait for the framework to refresh at a suitable moment. The reason is presumably that `ActionName` must already hold a value before the object becomes bindable.
- **Misuse #1**: wanting to fire this row from code. You cannot — `ExecuteAction` is private. The only ways to trigger it are the bound widget, or holding your own copy of the `ActionOptionData.OnAction` delegate.
- **Misuse #2**: reusing it as a generic "confirmation dialog button". The `IsChanged() == false`, `ApplyValue() == {}`, `Cancel() == {}` trio means it is **semantically different** from a stateful, revertible option; mixing them corrupts `OptionsVM`'s OK/Reset logic.
- **`DynamicInvokeWithLog()` rather than `Invoke()`.** That is a `TaleWorlds.Library` extension that invokes a delegate reflectively and logs before rethrowing. Compared with a direct `Invoke()` it gives you the target method's name when something inside throws — at the cost of a reflective call, and **it still rethrows rather than swallowing**.

## Key members

| Member | Signature | What it is actually for |
| --- | --- | --- |
| Constructor | `public ActionOptionDataVM(Action onAction, OptionsVM optionsVM, IOptionData option, TextObject name, TextObject optionActionName, TextObject description)` | Called by `OptionsVM`. Passes `OptionsVM.OptionsDataType.ActionOption` to the base as its type tag, stores the action and button caption in readonly fields, then **calls `RefreshValues()` once itself** so `ActionName` is populated immediately. |
| `ActionName` | `[DataSourceProperty] public string ActionName` | The text drawn on the button. The only binding property this class owns, produced by `RefreshValues()` from `_optionActionName`. |
| `RefreshValues` | `public override void RefreshValues()` | Refreshes the base, then **only when `_optionActionName != null`** converts it to a string into `ActionName`. When null it writes nothing and the caption keeps its old value. |
| `ExecuteAction` | `private void ExecuteAction()` | The actual behaviour: `_onAction?.DynamicInvokeWithLog()`. **Private, yet bound by name by Gauntlet** — which is exactly why C# cannot trigger it directly. |
| `Cancel` / `ResetData` / `SetValue` / `UpdateValue` / `ApplyValue` | five `public override void ...`, all empty bodies | Declare "this row has no revertible value". **Not an oversight**: the base declares them abstract, so they must be implemented. |
| `IsChanged` | `public override bool IsChanged()` | Always returns `false`. This keeps the generic panel's OK button from becoming enabled because of this row, forcing the action to take effect immediately. |
| `_onAction` | `private readonly Action _onAction` | The delegate handed in from `ActionOptionData.OnAction`; read exactly once, by `ExecuteAction`. |
| `_optionActionName` | `private readonly TextObject _optionActionName` | The original caption `TextObject`. **Readonly reference to a mutable object**: a language switch only shows up after an external `RefreshValues()`. |

## Real Example

Building a view row from option data — this is what `OptionsVM` does internally:

```csharp
using TaleWorlds.Engine.Options;
using TaleWorlds.MountAndBlade.Options;
using TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions;

// This is how OptionsVM turns an ActionOptionData into a row.
public ActionOptionDataVM CreateActionRow(IOptionData optionData)
{
    ActionOptionData actionData = optionData as ActionOptionData;
    if (actionData == null)
    {
        return null;
    }

    TextObject name = GameTexts.FindText(actionData.Name);
    TextObject description = GameTexts.FindText(actionData.Description);
    TextObject actionLabel = GameTexts.FindText(actionData.OptionActionName);

    return new ActionOptionDataVM(actionData.OnAction, this, actionData, name, actionLabel, description);
}
```

Supplying your own action option data so the panel can recognise it:

```csharp
public class MyActionOptionData : ActionOptionData
{
    public MyActionOptionData(string name, string description, string optionActionName, Action onAction)
        : base(name, description, optionActionName, onAction)
    {
    }
}
```

Driving the same logic safely from mod code — because `ExecuteAction` is private, a mod must hold its own delegate:

```csharp
public class MyOptionsRowFactory
{
    private readonly Action _onPickLoadOrder;

    public MyOptionsRowFactory(Action onPickLoadOrder)
    {
        _onPickLoadOrder = onPickLoadOrder;
    }

    public ActionOptionDataVM Build(OptionsVM optionsVM, IOptionData optionData)
    {
        ActionOptionData actionData = optionData as ActionOptionData;
        if (actionData == null)
        {
            return null;
        }

        TextObject label = GameTexts.FindText("str_my_options_pick_load_order");
        return new ActionOptionDataVM(_onPickLoadOrder, optionsVM, actionData, label, label, TextObject.GetEmpty());
    }

    public void Trigger()
    {
        _onPickLoadOrder?.DynamicInvokeWithLog();
    }
}
```

## Risks and crash boundaries

- **The private `ExecuteAction` is a deliberate API boundary.** There is no public C# path to trigger it, reflection aside. To press this button from code, the only stable route is to keep your own copy of `ActionOptionData.OnAction` and invoke it directly — which bypasses every state check the panel performs.
- **The six empty overrides are the contract, not a bug.** `GenericOptionDataVM` declares them abstract. Any subclass treating `ActionOptionDataVM` as a base and reusing its "option row" behaviour inherits a set of semantically empty implementations; `IsChanged()` permanently false in particular means a subclass cannot express "I have unsaved changes".
- **`DynamicInvokeWithLog` invokes reflectively and rethrows after logging.** Slower than `Invoke()` (one reflective call per activation) and **does not swallow exceptions**. If the action throws, the exception unwinds through Gauntlet's binding call stack into the panel layer. Wrap your action body in try/catch.
- **Stateless means no save hooks.** No `SyncData`, no serialization interface, no `IDataStore` interaction. The action it represents either takes effect immediately or is responsible for its own persistence. `OptionsVM`'s save path only handles options that have values.
- **No `OnFinalize` override**, so it registers and unbinds nothing. The lifecycle is clean; the only references held are two readonly delegate/text fields plus the base's `OptionsVM` and `IOptionData`.
- **`ActionName` can legitimately be empty.** When `_optionActionName` is null, `RefreshValues()` writes nothing. A data source that forgets the button caption yields a blank button rather than an exception.
- **Language switches do not refresh automatically.** `_optionActionName` is a `readonly` reference to a `TextObject`, while `ActionName` is a string snapshot taken at construction. Follow a language switch only if you explicitly call `RefreshValues()` again.
- **Native boundary**: none on this side. Pure managed. The underlying `TaleWorlds.MountAndBlade.Options.ActionOptionData` does touch native option storage, but that is the data side's job; this view model does not.
- **Cross-version**: `OptionsVM.OptionsDataType.ActionOption` and the six abstract members of `GenericOptionDataVM` are all v1.4.5 shapes. If upstream adds a new abstract member to `GenericOptionDataVM`, this class **fails to compile** rather than degrading silently — which is the better failure mode.

## Dependencies

- ↑ Base class: [GenericOptionDataVM](../GenericOptionDataVM) — declares the six abstract members and the shared option-row state
- ↔ Sibling: [OptionsVM](../OptionsVM) — the sole construction site, and the source of the `OptionsDataType.ActionOption` tag
- ↔ Sibling: [ActionCampaignOptionData](../ActionCampaignOptionData) — the campaign-side analogue of an "action row"; read the two together
- ↔ Sibling: [CampaignOptionsControllerVM](../CampaignOptionsControllerVM) — the corresponding controller for campaign settings
- → Option data interface: `IOptionData` (zh: [../../engine/IOptionData](../../engine/IOptionData)) plus `TaleWorlds.MountAndBlade.Options.ActionOptionData`
- → Delegate invocation extension: `DynamicInvokeWithLog` (`TaleWorlds.Library`)
- ↑ Text lookup: [GameTextManager](../../core-extra/GameTextManager)
- ↑ VM base: [ViewModel](../../core-extra/ViewModel)
