<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestStageItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestStageItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestStageItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestStageItemWidget.cs`

## 概述

`QuestStageItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsNew` | `public bool IsNew { get; set; }` |

## 使用示例

```csharp
// QuestStageItemWidget (Widget) 的典型用法
// 声明/访问一个 QuestStageItemWidget
var widget = root.GetChild("questStageItemWidget");;
```

## 参见

- [完整类目录](../catalog)