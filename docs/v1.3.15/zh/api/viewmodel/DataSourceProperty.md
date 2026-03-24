# DataSourceProperty / DataSourceProperty

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/DataSourceProperty.cs`
**Purpose**: 标记 ViewModel 属性以便与 Gauntlet UI 绑定 / Marker attribute to mark ViewModel properties for Gauntlet UI binding

## 概述 / Overview

`[DataSourceProperty]` 是一个简单的标记属性，用于将 ViewModel 的属性暴露给 Gauntlet UI 系统。代码生成器会扫描所有带有此标记的属性，并将它们绑定到 UI 层。

`[DataSourceProperty]` is a simple marker attribute used to expose ViewModel properties to the Gauntlet UI system. The code generator scans all properties marked with this attribute and binds them to the UI layer.

## 使用方法 / Usage

```csharp
using TaleWorlds.Library;

public class MyViewModel : ViewModel
{
    private string _name = "";
    private int _value = 0;
    private bool _isEnabled = false;

    // 标记属性以暴露给 UI
    // Mark property to expose to UI
    [DataSourceProperty]
    public string Name
    {
        get => this._name;
        set
        {
            if (SetField(ref this._name, value, "Name"))
            {
                // 属性变更通知会自动触发
                // Property change notification fires automatically
            }
        }
    }

    // 未标记的属性不会暴露给 UI
    // Properties without this marker are not exposed to UI
    public int InternalValue
    {
        get => this._value;
        set => this._value = value;
    }
}
```

## 重要说明 / Important Notes

- `[DataSourceProperty]` 仅用于标记需要绑定到 UI 的属性
- `[DataSourceProperty]` is only used to mark properties that need to be bound to UI
- 未标记的属性仍然是正常的 C# 属性，但不会暴露给 Gauntlet UI
- Unmarked properties are still normal C# properties but will not be exposed to Gauntlet UI
- 此属性没有参数或配置选项
- This attribute has no parameters or configuration options
- Gauntlet UI 绑定系统依赖于 `OnPropertyChangedWithValue<T>()` 方法来更新 UI
- Gauntlet UI binding system relies on `OnPropertyChangedWithValue<T>()` method to update UI

## 与 ViewModel 的关系 / Relationship with ViewModel

`[DataSourceProperty]` 与 `ViewModel` 类配合使用：

| Component | Description |
|-----------|-------------|
| `[DataSourceProperty]` | 标记属性为可绑定 / Marks property as bindable |
| `OnPropertyChangedWithValue<T>()` | 通知 UI 属性已更改 / Notifies UI of property change |
| `ViewModel.SetField<T>()` | 安全更新字段的辅助方法 / Helper method for safe field updates |

## 注意事项 / Notes

- 所有需要绑定到 Gauntlet UI 的 ViewModel 属性都必须标记此属性
- All ViewModel properties that need to bind to Gauntlet UI must be marked with this attribute
- 不存在 `BoolViewModel` 或 `TextViewModel` 这样的单独类
- There are no separate classes like `BoolViewModel` or `TextViewModel`
- 属性变更通知通过类型化的 `OnPropertyChangedWithValue` 方法处理
- Property change notifications are handled through typed `OnPropertyChangedWithValue` methods
