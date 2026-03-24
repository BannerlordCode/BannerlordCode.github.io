# HintViewModel / HintViewModel

**Namespace**: TaleWorlds.Core.ViewModelCollection.Information
**File**: `bannerlord-1.3.15/TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs`
**Purpose**: ViewModel for displaying game hint information / 用于显示游戏提示信息的 ViewModel

## Overview / 概述

`HintViewModel` is a simple ViewModel implementation for displaying hint information (Tooltip/Hint) in the UI. It uses `TextObject` to support localized hint text.

`HintViewModel` 是一个简单的 ViewModel 实现，用于在 UI 中显示提示信息（Tooltip/Hint）。它使用 `TextObject` 来支持本地化的提示文本。

## Inheritance Hierarchy / 继承关系

```
ViewModel (TaleWorlds.Library)
    └── HintViewModel (TaleWorlds.Core.ViewModelCollection.Information)
```

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| HintText | `TextObject` | Hint text content, supports localization / 提示文本内容，支持本地化 |

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| ExecuteBeginHint | `public void ExecuteBeginHint()` | Begin displaying the hint / 开始显示提示 |
| ExecuteEndHint | `public void ExecuteEndHint()` | End displaying the hint / 结束显示提示 |

## Usage Example / 使用示例

```csharp
using TaleWorlds.Core.ViewModelCollection.Information;
using TaleWorlds.Localization;

// Create HintViewModel with localized text
// 创建带本地化文本的 HintViewModel
public HintViewModel CreateItemHint(ItemObject item)
{
    TextObject hintText = new TextObject("{=item_hint}" +
        "Name: {=item_name}{NAME}\n" +
        "Value: {=item_value}{VALUE}", null);
    hintText.SetTextVariable("NAME", item.Name);
    hintText.SetTextVariable("VALUE", item.Value.ToString());
    
    return new HintViewModel(hintText, item.StringId);
}

// Use in UI
// 在 UI 中使用
public class MyItemVM : ViewModel
{
    private HintViewModel _itemHint;
    
    [DataSourceProperty]
    public HintViewModel ItemHint
    {
        get => this._itemHint;
        set => this.SetField(ref this._itemHint, value, "ItemHint");
    }
    
    public void OnItemHover()
    {
        this._itemHint.ExecuteBeginHint();
    }
    
    public void OnItemLeave()
    {
        this._itemHint.ExecuteEndHint();
    }
}
```

## Notes / 注意事项

- `HintViewModel` uses `TextObject` field directly internally rather than a property, which is a special design of this class
- `HintViewModel` 内部直接使用 `TextObject` 字段而非属性，这是该类的特殊设计
- Hint text is displayed via `MBInformationManager.ShowHint()`
- 提示文本通过 `MBInformationManager.ShowHint()` 显示
- You can specify a unique name for the hint via the `uniqueName` parameter
- 可以通过 `uniqueName` 参数为提示指定唯一名称
