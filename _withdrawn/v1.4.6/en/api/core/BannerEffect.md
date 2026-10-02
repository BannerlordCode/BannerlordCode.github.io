---
title: "BannerEffect"
description: "BannerEffect: a public class in TaleWorlds.Core, inheriting PropertyObject; 7 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.Core/BannerEffect.cs."
---
# BannerEffect

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class BannerEffect : PropertyObject`
**File:** `TaleWorlds.Core/BannerEffect.cs`

## Overview

BannerEffect lives in the TaleWorlds.Core module, source file TaleWorlds.Core/BannerEffect.cs. It is a public class (sealed), implementing/inheriting PropertyObject; the inheritance chain is BannerEffect → PropertyObject → MBObjectBase. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerEffect is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain BannerEffect → PropertyObject → MBObjectBase. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/BannerEffect.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IncrementType` | `public EffectIncrementType IncrementType` | property |
| `BannerEffect` | `public BannerEffect(string stringId) : base(stringId)` | constructor |
| `Initialize` | `public void Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)` | method |
| `GetBonusAtLevel` | `public float GetBonusAtLevel(int bannerLevel)` | method |
| `GetBonusStringAtLevel` | `public string GetBonusStringAtLevel(int bannerLevel)` | method |
| `GetDescription` | `public TextObject GetDescription(int bannerLevel)` | method |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PropertyObject](../PropertyObject)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
