---
title: "MultiplayerCultureSelectVM"
description: "MultiplayerCultureSelectVM 的自动生成类参考。"
---
# MultiplayerCultureSelectVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerCultureSelectVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection/MultiplayerCultureSelectVM.cs`

## 概述

`MultiplayerCultureSelectVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.TeamSelection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameModeText` | `public string GameModeText { get; set; }` |
| `CultureSelectionText` | `public string CultureSelectionText { get; set; }` |
| `FirstCultureName` | `public string FirstCultureName { get; set; }` |
| `SecondCultureName` | `public string SecondCultureName { get; set; }` |
| `FirstCultureCode` | `public string FirstCultureCode { get; set; }` |
| `SecondCultureCode` | `public string SecondCultureCode { get; set; }` |
| `FirstCultureColor1` | `public Color FirstCultureColor1 { get; set; }` |
| `FirstCultureColor2` | `public Color FirstCultureColor2 { get; set; }` |
| `SecondCultureColor1` | `public Color SecondCultureColor1 { get; set; }` |
| `SecondCultureColor2` | `public Color SecondCultureColor2 { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerCultureSelectVM 实例
MultiplayerCultureSelectVM multiplayerCultureSelectVM = ...;
multiplayerCultureSelectVM.RefreshValues();
```

### ExecuteSelectCulture
`public void ExecuteSelectCulture(int cultureIndex)`

**用途 / Purpose:** 执行 「select culture」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerCultureSelectVM 实例
MultiplayerCultureSelectVM multiplayerCultureSelectVM = ...;
multiplayerCultureSelectVM.ExecuteSelectCulture(0);
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 「close」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MultiplayerCultureSelectVM 实例
MultiplayerCultureSelectVM multiplayerCultureSelectVM = ...;
multiplayerCultureSelectVM.ExecuteClose();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerCultureSelectVM multiplayerCultureSelectVM = ...;
multiplayerCultureSelectVM.RefreshValues();
```

## 参见

- [本区域目录](../)