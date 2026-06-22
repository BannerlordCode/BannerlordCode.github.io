<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InputKeyVisualWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputKeyVisualWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class InputKeyVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/InputKeyVisualWidget.cs`

## 概述

`InputKeyVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `KeyID` | `public string KeyID { get { return this._keyID; }` |
| `IconsPath` | `public string IconsPath { get { return this._iconsPath; }` |

## 使用示例

```csharp
// InputKeyVisualWidget (Widget) 的典型用法
// 声明/访问一个 InputKeyVisualWidget
var widget = root.GetChild("inputKeyVisualWidget");;
```

## 参见

- [完整类目录](../catalog)