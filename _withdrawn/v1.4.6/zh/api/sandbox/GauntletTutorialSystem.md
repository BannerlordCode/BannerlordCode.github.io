---
title: "GauntletTutorialSystem"
description: "GauntletTutorialSystem：SandBox.GauntletUI.Tutorial 的 public 类，继承 GlobalLayer；公开成员 7 个（方法 3、属性 3、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletTutorialSystem

**Namespace:** `SandBox.GauntletUI.Tutorial`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletTutorialSystem : GlobalLayer`
**File:** `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

GauntletTutorialSystem 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs。它是一个 public 类，实现/继承 GlobalLayer，继承链为 GauntletTutorialSystem → GlobalLayer → IComparable。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletTutorialSystem 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI.Tutorial`，继承链 GauntletTutorialSystem → GlobalLayer → IComparable。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。继承链上的 IComparable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentEncyclopediaPageContext` | `public EncyclopediaPages CurrentEncyclopediaPageContext` | 属性 |
| `IsCharacterPortraitPopupOpen` | `public bool IsCharacterPortraitPopupOpen` | 属性 |
| `CurrentContext` | `public TutorialContexts CurrentContext` | 属性 |
| `GauntletTutorialSystem` | `public GauntletTutorialSystem()` | 构造函数 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnInitialize` | `public static void OnInitialize()` | 方法 |
| `OnUnload` | `public static void OnUnload()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GlobalLayer](../../gui/GlobalLayer/)
- [同命名空间 TutorialAttribute](../TutorialAttribute/)
- [同命名空间 TutorialHelper](../TutorialHelper/)
- [同命名空间 TutorialItemBase](../TutorialItemBase/)
