<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CommunityGameJoinData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CommunityGameJoinData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommunityGameJoinData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CommunityGameJoinData.cs`

## 概述

`CommunityGameJoinData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CommunityGameJoinData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |

## 使用示例

```csharp
var value = new CommunityGameJoinData();
```

## 参见

- [完整类目录](../catalog)