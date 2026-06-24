<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextureWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TextureWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs`

## 概述

`TextureWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TextureWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LoadingIconWidget` | `public Widget LoadingIconWidget { get; }` |
| `TextureProvider` | `public TextureProvider TextureProvider { get; }` |
| `SetForClearNextFrame` | `public bool SetForClearNextFrame { get; set; }` |
| `TextureProviderName` | `public string TextureProviderName { get; set; }` |
| `Texture` | `public Texture Texture { get; set; }` |

## 主要方法

### OnClearTextureProvider
`public virtual void OnClearTextureProvider()`

**用途 / Purpose:** 当 `clear texture provider` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new TextureWidget(context);
```

## 参见

- [完整类目录](../catalog)