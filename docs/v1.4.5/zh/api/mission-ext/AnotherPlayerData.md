<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AnotherPlayerData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AnotherPlayerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AnotherPlayerData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/AnotherPlayerData.cs`

## 概述

`AnotherPlayerData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AnotherPlayerData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerState` | `public AnotherPlayerState PlayerState { get; set; }` |
| `Experience` | `public int Experience { get; set; }` |

## 使用示例

```csharp
var value = new AnotherPlayerData();
```

## 参见

- [完整类目录](../catalog)