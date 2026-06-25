---
title: "BannerEditorState"
description: "BannerEditorState 的自动生成类参考。"
---
# BannerEditorState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BannerEditorState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BannerEditorState.cs`

## 概述

`BannerEditorState` 位于 `TaleWorlds.CampaignSystem.GameState`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameState` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Handler` | `public IBannerEditorStateHandler Handler { get; set; }` |

## 主要方法

### GetClan
`public Clan GetClan()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 clan 的结果。

```csharp
// 先通过子系统 API 拿到 BannerEditorState 实例
BannerEditorState bannerEditorState = ...;
var result = bannerEditorState.GetClan();
```

### GetCharacter
`public CharacterObject GetCharacter()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 character 的结果。

```csharp
// 先通过子系统 API 拿到 BannerEditorState 实例
BannerEditorState bannerEditorState = ...;
var result = bannerEditorState.GetCharacter();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerEditorState bannerEditorState = ...;
bannerEditorState.GetClan();
```

## 参见

- [本区域目录](../)