<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterDeveloperPerksContainerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterDeveloperPerksContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterDeveloperPerksContainerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/CharacterDeveloperPerksContainerWidget.cs`

## 概述

`CharacterDeveloperPerksContainerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftScopeID` | `public string LeftScopeID { get; set; }` |
| `RightScopeID` | `public string RightScopeID { get; set; }` |
| `DownScopeID` | `public string DownScopeID { get; set; }` |
| `UpScopeID` | `public string UpScopeID { get; set; }` |
| `FirstScopeID` | `public string FirstScopeID { get; set; }` |

## 使用示例

```csharp
// CharacterDeveloperPerksContainerWidget (Widget) 的典型用法
// 声明/访问一个 CharacterDeveloperPerksContainerWidget
var widget = root.GetChild("characterDeveloperPerksContainerWidget");;
```

## 参见

- [完整类目录](../catalog)