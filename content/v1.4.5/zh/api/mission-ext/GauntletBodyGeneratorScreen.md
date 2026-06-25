---
title: "GauntletBodyGeneratorScreen"
description: "GauntletBodyGeneratorScreen 的自动生成类参考。"
---
# GauntletBodyGeneratorScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletBodyGeneratorScreen : ScreenBase, IFaceGeneratorScreen`
**Base:** `ScreenBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator/GauntletBodyGeneratorScreen.cs`

## 概述

`GauntletBodyGeneratorScreen` 位于 `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnExit
`public void OnExit()`

**用途 / Purpose:** 在 「exit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletBodyGeneratorScreen 实例
GauntletBodyGeneratorScreen gauntletBodyGeneratorScreen = ...;
gauntletBodyGeneratorScreen.OnExit();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletBodyGeneratorScreen gauntletBodyGeneratorScreen = ...;
gauntletBodyGeneratorScreen.OnExit();
```

## 参见

- [本区域目录](../)