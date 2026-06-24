<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MaskedTextureWidget`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MaskedTextureWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class MaskedTextureWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/MaskedTextureWidget.cs`

## 概述

`MaskedTextureWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MaskedTextureWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OverlayTextureScale` | `public float OverlayTextureScale { get; set; }` |
| `ImageId` | `public string ImageId { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## 主要方法

### OnClearTextureProvider
`public override void OnClearTextureProvider()`

**用途 / Purpose:** 当 `clear texture provider` 事件触发时调用此方法。

## 使用示例

```csharp
var widget = new MaskedTextureWidget(context);
```

## 参见

- [完整类目录](../catalog)