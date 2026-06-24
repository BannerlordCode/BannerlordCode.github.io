<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BotData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BotData

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class BotData : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/BotData.cs`

## 概述

`BotData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BotData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Side` | `public BattleSideEnum Side { get; }` |
| `KillCount` | `public int KillCount { get; }` |
| `AssistCount` | `public int AssistCount { get; }` |
| `DeathCount` | `public int DeathCount { get; }` |
| `AliveBotCount` | `public int AliveBotCount { get; }` |

## 使用示例

```csharp
var value = new BotData();
```

## 参见

- [完整类目录](../catalog)