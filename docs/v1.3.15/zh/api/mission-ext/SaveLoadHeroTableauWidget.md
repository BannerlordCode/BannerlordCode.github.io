<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveLoadHeroTableauWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveLoadHeroTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SaveLoadHeroTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SaveLoad/SaveLoadHeroTableauWidget.cs`

## 概述

`SaveLoadHeroTableauWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsVersionCompatible` | `public bool IsVersionCompatible { get; }` |
| `HeroVisualCode` | `public string HeroVisualCode { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |

## 使用示例

```csharp
// SaveLoadHeroTableauWidget (Widget) 的典型用法
// 声明/访问一个 SaveLoadHeroTableauWidget
var widget = root.GetChild("saveLoadHeroTableauWidget");;
```

## 参见

- [完整类目录](../catalog)