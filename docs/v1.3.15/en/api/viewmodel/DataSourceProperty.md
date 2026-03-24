# DataSourceProperty / DataSourceProperty

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/DataSourceProperty.cs`
**Purpose**: Marker attribute to mark ViewModel properties for Gauntlet UI binding / 标记 ViewModel 属性以便与 Gauntlet UI 绑定

## Overview / 概述

`[DataSourceProperty]` is a simple marker attribute used to expose ViewModel properties to the Gauntlet UI system. The code generator scans all properties marked with this attribute and binds them to the UI layer.

`[DataSourceProperty]` 是一个简单的标记属性，用于将 ViewModel 的属性暴露给 Gauntlet UI 系统。代码生成器会扫描所有带有此标记的属性，并将它们绑定到 UI 层。

## Usage / 使用方法

```csharp
using TaleWorlds.Library;

public class MyViewModel : ViewModel
{
    private string _name = "";
    private int _value = 0;
    private bool _isEnabled = false;

    // Mark property to expose to UI
    // 标记属性以暴露给 UI
    [DataSourceProperty]
    public string Name
    {
        get => this._name;
        set
        {
            if (SetField(ref this._name, value, "Name"))
            {
                // Property change notification fires automatically
                // 属性变更通知会自动触发
            }
        }
    }

    // Properties without this marker are not exposed to UI
    // 未标记的属性不会暴露给 UI
    public int InternalValue
    {
        get => this._value;
        set => this._value = value;
    }
}
```

## Important Notes / 重要说明

- `[DataSourceProperty]` is only used to mark properties that need to be bound to UI
- `[DataSourceProperty]` 仅用于标记需要绑定到 UI 的属性
- Unmarked properties are still normal C# properties but will not be exposed to Gauntlet UI
- 未标记的属性仍然是正常的 C# 属性，但不会暴露给 Gauntlet UI
- This attribute has no parameters or configuration options
- 此属性没有参数或配置选项
- Gauntlet UI binding system relies on `OnPropertyChangedWithValue<T>()` method to update UI
- Gauntlet UI 绑定系统依赖于 `OnPropertyChangedWithValue<T>()` 方法来更新 UI

## Relationship with ViewModel / 与 ViewModel 的关系

`[DataSourceProperty]` works with the `ViewModel` class:

| Component | Description |
|-----------|-------------|
| `[DataSourceProperty]` | Marks property as bindable / 标记属性为可绑定 |
| `OnPropertyChangedWithValue<T>()` | Notifies UI of property change / 通知 UI 属性已更改 |
| `ViewModel.SetField<T>()` | Helper method for safe field updates / 安全更新字段的辅助方法 |

## Notes / 注意事项

- All ViewModel properties that need to bind to Gauntlet UI must be marked with this attribute
- 所有需要绑定到 Gauntlet UI 的 ViewModel 属性都必须标记此属性
- There are no separate classes like `BoolViewModel` or `TextViewModel`
- 不存在 `BoolViewModel` 或 `TextViewModel` 这样的单独类
- Property change notifications are handled through typed `OnPropertyChangedWithValue` methods
- 属性变更通知通过类型化的 `OnPropertyChangedWithValue` 方法处理
