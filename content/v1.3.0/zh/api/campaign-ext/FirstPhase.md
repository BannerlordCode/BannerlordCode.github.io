---
title: "FirstPhase"
description: "FirstPhase 的自动生成类参考。"
---
# FirstPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class FirstPhase`
**Base:** 无
**File:** `StoryMode/StoryModePhases/FirstPhase.cs`

## 概述

`FirstPhase` 位于 `StoryMode.StoryModePhases`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.StoryModePhases` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static FirstPhase Instance { get; }` |
| `CollectedBannerPieceCount` | `public int CollectedBannerPieceCount { get; }` |
| `FirstPhaseStartTime` | `public CampaignTime FirstPhaseStartTime { get; }` |
| `FirstPhaseEndTime` | `public CampaignTime FirstPhaseEndTime { get; }` |
| `AllPiecesCollected` | `public bool AllPiecesCollected { get; }` |

## 主要方法

### CollectBannerPiece
`public void CollectBannerPiece()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FirstPhase 实例
FirstPhase firstPhase = ...;
firstPhase.CollectBannerPiece();
```

### MergeDragonBanner
`public void MergeDragonBanner()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FirstPhase 实例
FirstPhase firstPhase = ...;
firstPhase.MergeDragonBanner();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FirstPhase firstPhase = ...;
firstPhase.CollectBannerPiece();
```

## 参见

- [本区域目录](../)