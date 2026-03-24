# ViewModel / ViewModel

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/ViewModel.cs`
**Purpose**: MVVM 模式的数据绑定基类，支持 Gauntlet UI 的属性变更通知 / MVVM data binding base class with property change notification support for Gauntlet UI

## 概述 / Overview

`ViewModel` 是游戏 UI 数据绑定的抽象基类，实现了 `INotifyPropertyChanged` 接口。它是 Gauntlet UI 框架的核心，为 UI 层提供数据绑定和命令执行能力。所有 UI 相关的 ViewModel 都应继承此类。

`ViewModel` is the abstract base class for UI data binding in the game's MVVM pattern, implementing the `INotifyPropertyChanged` interface. It is the core of the Gauntlet UI framework, providing data binding and command execution capabilities to the UI layer. All UI-related ViewModels should inherit from this class.

**注意**: 不存在单独的 `TextViewModel` 或 `BoolViewModel` 类。基础类型通过 `[DataSourceProperty]` 标记和 `OnPropertyChangedWithValue<T>()` 方法处理。

**Note**: There are no separate `TextViewModel` or `BoolViewModel` classes. Generic types are handled via the `[DataSourceProperty]` attribute and `OnPropertyChangedWithValue<T>()` method.

## 继承关系 / Inheritance Hierarchy

```
ViewModel (TaleWorlds.Library)
    └── IViewModel (interface)
    └── INotifyPropertyChanged (interface)
```

## 属性变更事件 / Property Changed Events

ViewModel 提供了 8 种类型化的事件处理器，用于高效的类型特定属性变更通知：

| Event | Type | Description |
|-------|------|-------------|
| PropertyChanged | `PropertyChangedEventHandler` | 标准 INotifyPropertyChanged 事件 / Standard INotifyPropertyChanged event |
| PropertyChangedWithValue | `PropertyChangedWithValueEventHandler` | 引用类型变更通知 / Reference type change notification |
| PropertyChangedWithBoolValue | `PropertyChangedWithBoolValueEventHandler` | bool 类型变更通知 / bool type change notification |
| PropertyChangedWithIntValue | `PropertyChangedWithIntValueEventHandler` | int 类型变更通知 / int type change notification |
| PropertyChangedWithFloatValue | `PropertyChangedWithFloatValueEventHandler` | float 类型变更通知 / float type change notification |
| PropertyChangedWithUIntValue | `PropertyChangedWithUIntValueEventHandler` | uint 类型变更通知 / uint type change notification |
| PropertyChangedWithColorValue | `PropertyChangedWithColorValueEventHandler` | Color 类型变更通知 / Color type change notification |
| PropertyChangedWithDoubleValue | `PropertyChangedWithDoubleValueEventHandler` | double 类型变更通知 / double type change notification |
| PropertyChangedWithVec2Value | `PropertyChangedWithVec2ValueEventHandler` | Vec2 类型变更通知 / Vec2 type change notification |

## 重要方法 / Important Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| OnPropertyChanged | `public void OnPropertyChanged(string propertyName)` | 触发标准属性变更事件 / Trigger standard property changed event |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue<T>(T value, string propertyName)` | 触发引用类型属性变更 / Trigger reference type property change |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(bool value, string propertyName)` | 触发 bool 属性变更 / Trigger bool property change |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(int value, string propertyName)` | 触发 int 属性变更 / Trigger int property change |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(float value, string propertyName)` | 触发 float 属性变更 / Trigger float property change |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(uint value, string propertyName)` | 触发 uint 属性变更 / Trigger uint property change |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(Color value, string propertyName)` | 触发 Color 属性变更 / Trigger Color property change |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(double value, string propertyName)` | 触发 double 属性变更 / Trigger double property change |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(Vec2 value, string propertyName)` | 触发 Vec2 属性变更 / Trigger Vec2 property change |
| SetField | `protected bool SetField<T>(ref T field, T value, string propertyName)` | 安全地设置字段并触发通知 / Safely set field and trigger notification |
| ExecuteCommand | `public void ExecuteCommand(string commandName, object[] parameters)` | 执行命名命令 / Execute named command |
| RefreshValues | `public virtual void RefreshValues()` | 刷新所有绑定值 / Refresh all bound values |
| GetViewModelAtPath | `public object GetViewModelAtPath(BindingPath path)` | 获取路径处的 ViewModel / Get ViewModel at path |
| OnFinalize | `public virtual void OnFinalize()` | 清理资源 / Cleanup resources |

## 标准属性声明模式 / Standard Property Declaration Pattern

```csharp
// 定义私有字段
// Define private field
private string _myProperty = "";

// 使用 [DataSourceProperty] 标记的属性
// Property marked with [DataSourceProperty]
[DataSourceProperty]
public string MyProperty
{
    get => this._myProperty;
    set
    {
        // 使用 OnPropertyChangedWithValue 进行类型化通知
        // Use OnPropertyChangedWithValue for typed notification
        if (value != this._myProperty)
        {
            this._myProperty = value;
            base.OnPropertyChangedWithValue<string>(value, "MyProperty");
        }
    }
}

// Bool 类型示例
// Bool type example
[DataSourceProperty]
public bool IsEnabled
{
    get => this._isEnabled;
    set
    {
        if (value != this._isEnabled)
        {
            this._isEnabled = value;
            base.OnPropertyChangedWithValue(value, "IsEnabled");
        }
    }
}
```

## 使用示例 / Usage Example

```csharp
using TaleWorlds.Library;

public class MyViewModel : ViewModel
{
    private string _name = "";
    private int _count = 0;
    private bool _isActive = false;

    public MyViewModel()
    {
    }

    // 刷新值方法 - 子类可重写
    // Refresh values - overridable by subclasses
    public override void RefreshValues()
    {
        base.RefreshValues();
        // 重新计算并通知所有属性
        // Recalculate and notify all properties
    }

    [DataSourceProperty]
    public string Name
    {
        get => this._name;
        set
        {
            if (SetField(ref this._name, value, "Name"))
            {
                // 值已更新并通知
                // Value updated and notified
            }
        }
    }

    [DataSourceProperty]
    public int Count
    {
        get => this._count;
        set
        {
            if (SetField(ref this._count, value, "Count"))
            {
                // 值已更新并通知
                // Value updated and notified
            }
        }
    }

    [DataSourceProperty]
    public bool IsActive
    {
        get => this._isActive;
        set
        {
            if (SetField(ref this._isActive, value, "IsActive"))
            {
                // 值已更新并通知
                // Value updated and notified
            }
        }
    }

    // 命令方法 - 可被 Gauntlet UI 调用
    // Command method - can be called by Gauntlet UI
    public void ExecuteSomeAction()
    {
        this._count++;
        OnPropertyChangedWithValue(this._count, "Count");
    }
}
```

## 与 Gauntlet UI 的绑定 / Binding with Gauntlet UI

ViewModel 通过 `[DataSourceProperty]` 属性与 Gauntlet UI 绑定。代码生成器会扫描所有标记的属性，并将它们暴露给 UI 层。

ViewModels bind to Gauntlet UI through the `[DataSourceProperty]` attribute. The code generator scans all marked properties and exposes them to the UI layer.

## 注意事项 / Notes

- 所有 UI 绑定的 ViewModel 必须继承 `ViewModel`
- All UI-bound ViewModels must inherit from `ViewModel`
- 使用 `[DataSourceProperty]` 标记所有需要绑定到 UI 的属性
- Mark all properties that need to bind to UI with `[DataSourceProperty]`
- 优先使用类型化 `OnPropertyChangedWithValue` 方法以获得更好的性能
- Prefer typed `OnPropertyChangedWithValue` methods for better performance
- `SetField<T>` 方法提供了一种简洁的安全更新模式
- `SetField<T>` method provides a concise safe update pattern
- 不要存在单独的 `BoolViewModel` 或 `TextViewModel` 类
- There are no separate `BoolViewModel` or `TextViewModel` classes
