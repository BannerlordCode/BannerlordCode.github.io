---
title: "GauntletGamepadNavigationManager"
description: "GauntletGamepadNavigationManager：TaleWorlds.GauntletUI.GamepadNavigation 的 public 类；公开成员 15 个（方法 6、属性 9、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletGamepadNavigationManager

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GauntletGamepadNavigationManager`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

GauntletGamepadNavigationManager 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs。它是一个 public 类，继承链为 GauntletGamepadNavigationManager。public/protected 成员共 15 个：6 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletGamepadNavigationManager 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.GamepadNavigation`，继承链 GauntletGamepadNavigationManager。成员构成以属性为主（属性 9/15，方法 6/15），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static GauntletGamepadNavigationManager Instance` | 属性 |
| `IsTouchpadMouseEnabled` | `public bool IsTouchpadMouseEnabled` | 属性 |
| `IsFollowingMobileTarget` | `public bool IsFollowingMobileTarget` | 属性 |
| `IsHoldingDpadKeysForNavigation` | `public bool IsHoldingDpadKeysForNavigation` | 属性 |
| `IsCursorMovingForNavigation` | `public bool IsCursorMovingForNavigation` | 属性 |
| `IsInWrapMovement` | `public bool IsInWrapMovement` | 属性 |
| `LastTargetedWidget` | `public Widget LastTargetedWidget` | 属性 |
| `TargetedWidgetHasAction` | `public bool TargetedWidgetHasAction` | 属性 |
| `AnyWidgetUsingNavigation` | `public bool AnyWidgetUsingNavigation` | 属性 |
| `Initialize` | `public static void Initialize()` | 方法 |
| `TryNavigateTo` | `public bool TryNavigateTo(Widget widget)` | 方法 |
| `TryNavigateTo` | `public bool TryNavigateTo(GamepadNavigationScope scope)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `Update` | `public void Update(float dt)` | 方法 |
| `SetAllDirty` | `public void SetAllDirty()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 GamepadNavigationForcedScopeCollection](../GamepadNavigationForcedScopeCollection/)
- [同命名空间 GamepadNavigationScope](../GamepadNavigationScope/)
- [同命名空间 GamepadNavigationTypes](../GamepadNavigationTypes/)
