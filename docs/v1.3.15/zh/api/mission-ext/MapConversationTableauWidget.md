<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapConversationTableauWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapConversationTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapConversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapConversationTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapConversation/MapConversationTableauWidget.cs`

## 概述

`MapConversationTableauWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public object Data { get; set; }` |

## 主要方法

### OnClearTextureProvider
```csharp
public override void OnClearTextureProvider()
```

## 使用示例

```csharp
// MapConversationTableauWidget (Widget) 的典型用法
// 声明/访问一个 MapConversationTableauWidget
var widget = root.GetChild("mapConversationTableauWidget");;
```

## 参见

- [完整类目录](../catalog)