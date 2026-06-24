<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MeetingSceneData`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MeetingSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct MeetingSceneData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/MeetingSceneData.cs`

## 概述

`MeetingSceneData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MeetingSceneData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `CultureString` | `public string CultureString { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |

## 使用示例

```csharp
var value = new MeetingSceneData();
```

## 参见

- [完整类目录](../catalog)