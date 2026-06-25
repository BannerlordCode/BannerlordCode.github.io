---
title: "GauntletBannerBuilderScreen"
description: "GauntletBannerBuilderScreen 的自动生成类参考。"
---
# GauntletBannerBuilderScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletBannerBuilderScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs`

## 概述

`GauntletBannerBuilderScreen` 位于 `TaleWorlds.MountAndBlade.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |

## 主要方法

### Exit
`public void Exit(bool isCancel)`

**用途 / Purpose:** 处理与 「exit」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GauntletBannerBuilderScreen 实例
GauntletBannerBuilderScreen gauntletBannerBuilderScreen = ...;
gauntletBannerBuilderScreen.Exit(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletBannerBuilderScreen gauntletBannerBuilderScreen = ...;
gauntletBannerBuilderScreen.Exit(false);
```

## 参见

- [本区域目录](../)