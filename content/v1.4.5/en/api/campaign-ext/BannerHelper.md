---
title: "BannerHelper: banner effects in MountAndBlade calculations"
description: "BannerHelper applies a matching BannerComponent effect to a live FactoredNumber in v1.4.5 combat and agent-stat calculations."
---
# BannerHelper

**Namespace:** `MBHelpers`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public static class BannerHelper`  
**Base:** none  
**Source:** `bin/TaleWorlds.MountAndBlade/MBHelpers/BannerHelper.cs`

## One-sentence responsibility

`BannerHelper` is the MountAndBlade-layer adapter that takes a requested [BannerEffect](../../core-extra/BannerEffect), checks a live [BannerComponent](../../core-extra/BannerComponent), and applies the component's level bonus to an existing [FactoredNumber](../../mission-ext/FactoredNumber).

## Mental model

This is a narrow calculation helper, not a banner owner or a combat model. The caller already owns the calculation and obtains the active banner from `MissionGameModels.Current.BattleBannerBearersModel`; the helper only decides whether the component matches the requested effect and then mutates the `FactoredNumber` passed by reference.

There is another `BannerHelper` in the Campaign `Helpers` namespace. Use [that page](../../system/BannerHelper) for hero banner-item selection and `ExplainedNumber` contributions. Use this page when the target is the MountAndBlade `FactoredNumber` used by damage, morale, movement, or weapon-stat calculations. Do not call either helper to equip a banner, choose a formation banner, or replace the model that owns the surrounding calculation.

## When to use and when not to use

- Use `AddBannerBonusForBanner` inside a live stat or damage calculation that already has a `BannerComponent` and a `FactoredNumber`.
- Pass the concrete requested effect from [DefaultBannerEffects](../../core-extra/DefaultBannerEffects), such as `IncreasedMeleeDamage` or `IncreasedMountMovementSpeed`, rather than guessing from the item name.
- Do not pass a null effect or a component from an unrelated calculation. The helper expects the requested effect and component to be meaningful runtime objects.
- Do not use it to modify `BannerComponent.BannerLevel`, assign equipment, or persist a bonus. Banner data and the calculation result belong to their respective owners.

## Dependency graph

```text
Formation / Agent stat or damage model
                |
                v
MissionGameModels.Current.BattleBannerBearersModel
                |
                v
       BannerComponent + requested BannerEffect
                |
                v
          MBHelpers.BannerHelper
                |
                v
        FactoredNumber.ResultNumber
```

- The caller supplies the active component and the requested effect. Common callers include `CustomAgentApplyDamageModel`, `CustomBattleAgentStatCalculateModel`, `CustomBattleMoraleModel`, and their Sandbox counterparts.
- `BannerComponent.GetBannerEffectBonus()` reads the component's `BannerLevel` through [BannerEffect](../../core-extra/BannerEffect). The helper does not calculate banner levels itself.
- `EffectIncrementType.Add` and `EffectIncrementType.AddFactor` are the two supported arithmetic branches; [FactoredNumber](../../mission-ext/FactoredNumber) owns the base value, factors, and final clamp.
- This page is not the Campaign reward path. Hero item selection and Campaign model ownership are documented by [Campaign BannerHelper](../../system/BannerHelper).

## Public contract

### `AddBannerBonusForBanner`

`AddBannerBonusForBanner(BannerEffect bannerEffect, BannerComponent bannerComponent, ref FactoredNumber bonuses)` performs three source-confirmed steps:

1. It returns without changing `bonuses` when `bannerComponent` is null or its actual `BannerEffect` is not the requested `bannerEffect`.
2. It reads the matching component bonus through `GetBannerEffectBonus()`, which uses the component's banner level.
3. It calls `FactoredNumber.Add` for `EffectIncrementType.Add`, or `FactoredNumber.AddFactor` for `EffectIncrementType.AddFactor`.

`FactoredNumber.Add` changes the base number. `AddFactor` accumulates a factor that contributes to `BaseNumber + BaseNumber * sumOfFactors`. The MountAndBlade helper does not record an explanation label, unlike the Campaign helper that targets `ExplainedNumber`.

## Real call chain: damage amplification

`CustomAgentApplyDamageModel.ApplyDamageAmplifications` gets the formation's active banner from the battle-banner model, creates the calculation accumulator from `baseDamage`, and then uses the helper for the matching default effect:

```csharp
Formation attackerFormation = attackInformation.AttackerFormation;
BannerComponent activeBanner =
    MissionGameModels.Current.BattleBannerBearersModel.GetActiveBanner(attackerFormation);
FactoredNumber bonuses = new FactoredNumber(baseDamage);

if (activeBanner != null && attackInformation.AttackerWeapon.CurrentUsageItem.IsMeleeWeapon)
{
    BannerHelper.AddBannerBonusForBanner(
        DefaultBannerEffects.IncreasedMeleeDamage,
        activeBanner,
        ref bonuses);
}

return bonuses.ResultNumber;
```

The source continues with `IncreasedMeleeDamageAgainstMountedTroops`, `IncreasedRangedDamage`, and charge effects under their own weapon or collision conditions. The helper does not select those conditions and does not return the final damage; the model owns both decisions.

## Lifecycle, mutation, and save boundaries

- Call this helper only after `MissionGameModels.Current` and the active battle-banner model can supply a live component. The helper is not a Campaign-startup service.
- `bannerComponent.BannerEffect == bannerEffect` is an identity/selection guard. A non-null banner is intentionally ignored when it carries another effect.
- `FactoredNumber` is a local value-type accumulator. Passing it by `ref` mutates the current calculation, not a saved Hero, Formation, or BannerComponent.
- The effect amount comes from the component's level and the effect's configured level bonuses. Do not apply the same factor again in the caller.
- The caller must return or consume `bonuses.ResultNumber` at the calculation boundary. Retaining the accumulator beyond that calculation does not preserve a campaign bonus.

## Risks

- Passing a null `BannerEffect` can fail when a component with a matching null effect reaches the increment switch; use a registered concrete effect from the owning model.
- Passing a component before its effect has been deserialized or initialized can produce invalid bonus data. Banner objects belong to the Core object-registration lifecycle.
- Calling from a UI refresh, save callback, or background thread uses the wrong lifecycle and can read or mutate live combat state outside its owner.
- `Add` and `AddFactor` are not interchangeable. Treating a factor such as `0.15f` as an additive `0.15` changes the result; multiplying the factor a second time is equally wrong.
- The helper does not clamp or explain the result itself. The surrounding `FactoredNumber` calculation owns its limits and final consumption.
- Do not serialize `FactoredNumber`, active `BannerComponent`, or `MissionGameModels` as custom save state. They are transient runtime inputs to a model calculation.

## Version note

This page follows v1.4.5 `MBHelpers/BannerHelper.cs`. The implementation has one public method and supports only `EffectIncrementType.Add` and `EffectIncrementType.AddFactor`; equipment ownership, effect registration, banner selection, and damage conditions remain outside this helper.

## Navigation

- [↑ Campaign extension index](../)
- [↔ Campaign BannerHelper](../../system/BannerHelper)
- [Related: BannerComponent](../../core-extra/BannerComponent)
- [Related: BannerEffect](../../core-extra/BannerEffect)
- [Related: DefaultBannerEffects](../../core-extra/DefaultBannerEffects)
- [Related: EffectIncrementType](../../core-extra/EffectIncrementType)
- [Related: FactoredNumber](../../mission-ext/FactoredNumber)
- [Related: BattleBannerBearersModel](../../mission-ext/BattleBannerBearersModel)
- [中文页面](../../../../zh/api/campaign-ext/BannerHelper)
