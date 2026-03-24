# ViewModel / ViewModel

**Namespace**: TaleWorlds.Library
**File**: `bannerlord-1.3.15/TaleWorlds.Library/ViewModel.cs`
**Purpose**: MVVM data binding base class with property change notification support for Gauntlet UI / MVVM 模式的数据绑定基类，支持 Gauntlet UI 的属性变更通知

## Overview / 概述

`ViewModel` is the abstract base class for UI data binding in the game's MVVM pattern, implementing the `INotifyPropertyChanged` interface. It is the core of the Gauntlet UI framework, providing data binding and command execution capabilities to the UI layer. All UI-related ViewModels should inherit from this class.

`ViewModel` 是游戏 UI 数据绑定的抽象基类，实现了 `INotifyPropertyChanged` 接口。它是 Gauntlet UI 框架的核心，为 UI 层提供数据绑定和命令执行能力。所有 UI 相关的 ViewModel 都应继承此类。

**Note / 注意**: There are no separate `TextViewModel` or `BoolViewModel` classes. Generic types are handled via the `[DataSourceProperty]` attribute and `OnPropertyChangedWithValue<T>()` method. / 不存在单独的 `TextViewModel` 或 `BoolViewModel` 类。基础类型通过 `[DataSourceProperty]` 标记和 `OnPropertyChangedWithValue<T>()` 方法处理。

## Inheritance Hierarchy / 继承关系

```
ViewModel (TaleWorlds.Library)
    └── IViewModel (interface)
    └── INotifyPropertyChanged (interface)
```

## Property Changed Events / 属性变更事件

ViewModel provides 8 typed event handlers for efficient type-specific property change notifications:

| Event | Type | Description |
|-------|------|-------------|
| PropertyChanged | `PropertyChangedEventHandler` | Standard INotifyPropertyChanged event / 标准 INotifyPropertyChanged 事件 |
| PropertyChangedWithValue | `PropertyChangedWithValueEventHandler` | Reference type change notification / 引用类型变更通知 |
| PropertyChangedWithBoolValue | `PropertyChangedWithBoolValueEventHandler` | bool type change notification / bool 类型变更通知 |
| PropertyChangedWithIntValue | `PropertyChangedWithIntValueEventHandler` | int type change notification / int 类型变更通知 |
| PropertyChangedWithFloatValue | `PropertyChangedWithFloatValueEventHandler` | float type change notification / float 类型变更通知 |
| PropertyChangedWithUIntValue | `PropertyChangedWithUIntValueEventHandler` | uint type change notification / uint 类型变更通知 |
| PropertyChangedWithColorValue | `PropertyChangedWithColorValueEventHandler` | Color type change notification / Color 类型变更通知 |
| PropertyChangedWithDoubleValue | `PropertyChangedWithDoubleValueEventHandler` | double type change notification / double 类型变更通知 |
| PropertyChangedWithVec2Value | `PropertyChangedWithVec2ValueEventHandler` | Vec2 type change notification / Vec2 类型变更通知 |

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| OnPropertyChanged | `public void OnPropertyChanged(string propertyName)` | Trigger standard property changed event / 触发标准属性变更事件 |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue<T>(T value, string propertyName)` | Trigger reference type property change / 触发引用类型属性变更 |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(bool value, string propertyName)` | Trigger bool property change / 触发 bool 属性变更 |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(int value, string propertyName)` | Trigger int property change / 触发 int 属性变更 |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(float value, string propertyName)` | Trigger float property change / 触发 float 属性变更 |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(uint value, string propertyName)` | Trigger uint property change / 触发 uint 属性变更 |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(Color value, string propertyName)` | Trigger Color property change / 触发 Color 属性变更 |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(double value, string propertyName)` | Trigger double property change / 触发 double 属性变更 |
| OnPropertyChangedWithValue | `public void OnPropertyChangedWithValue(Vec2 value, string propertyName)` | Trigger Vec2 property change / 触发 Vec2 属性变更 |
| SetField | `protected bool SetField<T>(ref T field, T value, string propertyName)` | Safely set field and trigger notification / 安全地设置字段并触发通知 |
| ExecuteCommand | `public void ExecuteCommand(string commandName, object[] parameters)` | Execute named command / 执行命名命令 |
| RefreshValues | `public virtual void RefreshValues()` | Refresh all bound values / 刷新所有绑定值 |
| GetViewModelAtPath | `public object GetViewModelAtPath(BindingPath path)` | Get ViewModel at path / 获取路径处的 ViewModel |
| OnFinalize | `public virtual void OnFinalize()` | Cleanup resources / 清理资源 |

## Standard Property Declaration Pattern / 标准属性声明模式

```csharp
// Define private field
// 定义私有字段
private string _myProperty = "";

// Property marked with [DataSourceProperty]
// 使用 [DataSourceProperty] 标记的属性
[DataSourceProperty]
public string MyProperty
{
    get => this._myProperty;
    set
    {
        // Use OnPropertyChangedWithValue for typed notification
        // 使用 OnPropertyChangedWithValue 进行类型化通知
        if (value != this._myProperty)
        {
            this._myProperty = value;
            base.OnPropertyChangedWithValue<string>(value, "MyProperty");
        }
    }
}

// Bool type example
// Bool 类型示例
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

## Usage Example / 使用示例

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

    // Refresh values - overridable by subclasses
    // 刷新值方法 - 子类可重写
    public override void RefreshValues()
    {
        base.RefreshValues();
        // Recalculate and notify all properties
        // 重新计算并通知所有属性
    }

    [DataSourceProperty]
    public string Name
    {
        get => this._name;
        set
        {
            if (SetField(ref this._name, value, "Name"))
            {
                // Value updated and notified
                // 值已更新并通知
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
                // Value updated and notified
                // 值已更新并通知
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
                // Value updated and notified
                // 值已更新并通知
            }
        }
    }

    // Command method - can be called by Gauntlet UI
    // 命令方法 - 可被 Gauntlet UI 调用
    public void ExecuteSomeAction()
    {
        this._count++;
        OnPropertyChangedWithValue(this._count, "Count");
    }
}
```

## Binding with Gauntlet UI / 与 Gauntlet UI 的绑定

ViewModels bind to Gauntlet UI through the `[DataSourceProperty]` attribute. The code generator scans all marked properties and exposes them to the UI layer.

ViewModel 通过 `[DataSourceProperty]` 属性与 Gauntlet UI 绑定。代码生成器会扫描所有标记的属性，并将它们暴露给 UI 层。

## Notes / 注意事项

- All UI-bound ViewModels must inherit from `ViewModel`
- 所有 UI 绑定的 ViewModel 必须继承 `ViewModel`
- Mark all properties that need to bind to UI with `[DataSourceProperty]`
- 使用 `[DataSourceProperty]` 标记所有需要绑定到 UI 的属性
- Prefer typed `OnPropertyChangedWithValue` methods for better performance
- 优先使用类型化 `OnPropertyChangedWithValue` 方法以获得更好的性能
- `SetField<T>` method provides a concise safe update pattern
- `SetField<T>` 方法提供了一种简洁的安全更新模式
- There are no separate `BoolViewModel` or `TextViewModel` classes
- 不要存在单独的 `BoolViewModel` 或 `TextViewModel` 类
