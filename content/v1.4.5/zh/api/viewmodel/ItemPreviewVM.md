---
title: "ItemPreviewVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemPreviewVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemPreviewVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemPreviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Inventory/ItemPreviewVM.cs`

## 概述

`ItemPreviewVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ItemName` | `public string ItemName { get; set; }` |
| `ItemTableau` | `public ItemCollectionElementViewModel ItemTableau { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Open
`public void Open(EquipmentElement item)`

**用途 / Purpose:** 处理 `open` 相关逻辑。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

### Close
`public void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

## 使用示例

```csharp
var value = new ItemPreviewVM();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)