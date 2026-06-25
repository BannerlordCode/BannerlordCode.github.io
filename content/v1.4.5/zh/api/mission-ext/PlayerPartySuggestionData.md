---
title: "PlayerPartySuggestionData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerPartySuggestionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerPartySuggestionData

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class PlayerPartySuggestionData`
**领域:** mission-ext

## 概述

`PlayerPartySuggestionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PlayerPartySuggestionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `PlayerName` | `public string PlayerName { get; }` |
| `SuggestingPlayerId` | `public PlayerId SuggestingPlayerId { get; }` |
| `SuggestingPlayerName` | `public string SuggestingPlayerName { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoYouWantToInviteText` | `public string DoYouWantToInviteText { get; set; }` |
| `PlayerSuggestedText` | `public string PlayerSuggestedText { get; set; }` |
| `SuggestedPlayer` | `public MPLobbyPlayerBaseVM SuggestedPlayer { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OpenWith
`public void OpenWith(PlayerPartySuggestionData data)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### Close
`public void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

## 使用示例

```csharp
var value = new PlayerPartySuggestionData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
