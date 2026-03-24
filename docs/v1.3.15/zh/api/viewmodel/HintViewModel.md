# HintViewModel / HintViewModel

**Namespace**: TaleWorlds.Core.ViewModelCollection.Information
**File**: `bannerlord-1.3.15/TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs`
**Purpose**: 用于显示游戏提示信息的 ViewModel / ViewModel for displaying game hint information

## 概述 / Overview

`HintViewModel` 是一个简单的 ViewModel 实现，用于在 UI 中显示提示信息（Tooltip/Hint）。它使用 `TextObject` 来支持本地化的提示文本。

`HintViewModel` is a simple ViewModel implementation for displaying hint information (Tooltip/Hint) in the UI. It uses `TextObject` to support localized hint text.

## 继承关系 / Inheritance Hierarchy

```
ViewModel (TaleWorlds.Library)
    └── HintViewModel (TaleWorlds.Core.ViewModelCollection.Information)
```

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| HintText | `TextObject` | 提示文本内容，支持本地化 / Hint text content, supports localization |

## 重要方法 / Important Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| ExecuteBeginHint | `public void ExecuteBeginHint()` | 开始显示提示 / Begin displaying the hint |
| ExecuteEndHint | `public void ExecuteEndHint()` | 结束显示提示 / End displaying the hint |

## 使用示例 / Usage Example

```csharp
using TaleWorlds.Core.ViewModelCollection.Information;
using TaleWorlds.Localization;

// 创建带本地化文本的 HintViewModel
// Create HintViewModel with localized text
public HintViewModel CreateItemHint(ItemObject item)
{
    TextObject hintText = new TextObject("{=item_hint}" +
        "Name: {=item_name}{NAME}\n" +
        "Value: {=item_value}{VALUE}", null);
    hintText.SetTextVariable("NAME", item.Name);
    hintText.SetTextVariable("VALUE", item.Value.ToString());
    
    return new HintViewModel(hintText, item.StringId);
}

// 在 UI 中使用
// Use in UI
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

## 注意事项 / Notes

- `HintViewModel` 内部直接使用 `TextObject` 字段而非属性，这是该类的特殊设计
- `HintViewModel` uses `TextObject` field directly internally rather than a property, which is a special design of this class
- 提示文本通过 `MBInformationManager.ShowHint()` 显示
- Hint text is displayed via `MBInformationManager.ShowHint()`
- 可以通过 `uniqueName` 参数为提示指定唯一名称
- You can specify a unique name for the hint via the `uniqueName` parameter
