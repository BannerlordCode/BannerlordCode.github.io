<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScrollbarWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScrollbarWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollbarWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs`

## 概述

`ScrollbarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDiscrete` | `public bool IsDiscrete { get { return this._isDiscrete; }` |
| `Locked` | `public bool Locked { get { return this._locked; }` |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }` |
| `ReverseDirection` | `public bool ReverseDirection { get; set; }` |
| `ValueFloat` | `public float ValueFloat { get { return this._valueFloat; }` |
| `ValueInt` | `public int ValueInt { get { return MathF.Round(this.ValueFloat); }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize { get; set; }` |
| `Handle` | `public Widget Handle { get { return this._handle; }` |
| `ScrollbarArea` | `public Widget ScrollbarArea { get; set; }` |

## 主要方法

### SetValueForced
```csharp
public void SetValueForced(float value)
```

## 使用示例

```csharp
// ScrollbarWidget (Widget) 的典型用法
// 声明/访问一个 ScrollbarWidget
var widget = root.GetChild("scrollbarWidget");;
```

## 参见

- [完整类目录](../catalog)