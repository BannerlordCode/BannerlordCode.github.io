---
title: "ViewModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ViewModel / ViewModel`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ViewModel / ViewModel

## 心智模型

先把 `ViewModel` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.Library
**File**: 

`bannerlord-1.3.15/TaleWorlds.Library/ViewModel.cs

`
**Purpose**: MVVM 模式的数据绑定基类，支持 Gauntlet UI 的属性变更通知 / MVVM data binding base class with property change notification support for Gauntlet UI


<!-- BEGIN DEV-USE-CASES -->

## 开发用?/ Developer Use Cases

### 用例 1: 创建自定?ViewModel

**场景**: ?Gauntlet UI 界面提供数据绑定源?
`

`

`csharp
public class MyModVM : ViewModel
{
    private string _title;
    [DataSourceProperty]
    public string Title
    {
        get =&gt; _title;
        set
        {
            if (_title != value)
            {
                _title = value;
                OnPropertyChanged(nameof(Title));
            }
        }
    }
}
`

`

`

**要点**: 继承 

`ViewModel

`；属性用 

`[DataSourceProperty]

` 标记；setter 中必须调 

`OnPropertyChanged

`，否?UI 不更新?
### 用例 2: 触发 UI 命令

**场景**: UI 按钮点击时执?mod 逻辑?
`

`

`csharp
public class MyModVM : ViewModel
{
    [DataSourceMethod]
    public void OnConfirmButton()
    {
        // 处理确认按钮点击
    }
}
`

`

`

**要点**: UI 命令方法?

`[DataSourceMethod]

` 标记；方法名需?XML 中的绑定一致?
### 用例 3: 通知 UI 值变?
**场景**: 数值变化时同步更新 UI（无需手写 setter 模板）?
`

`

`csharp
public void UpdateGold(int newGold)
{
    OnPropertyChangedWithValue(newGold, nameof(CurrentGold));
}
`

`

`

**要点**: 

`OnPropertyChangedWithValue&lt;T&gt;

` 一次性完成设值与通知；有 

`int

`、`float

`、`bool

`、`string

`、`Color

`、`Vec2

` 等重载?
### 用例 4: 绑定集合到列?UI

**场景**: ?Gauntlet 列表中显示动态数据?
`

`

`csharp
private readonly MBBindingList&lt;ItemVM&gt; _items = new MBBindingList&lt;ItemVM&gt;();
[DataSourceProperty]
public MBBindingList&lt;ItemVM&gt; Items =&gt; _items;

// 添加项时
_items.Add(new ItemVM(someData));
OnPropertyChanged(nameof(Items)); // 通知 UI 刷新列表
`

`

`

**要点**: Gauntlet 列表绑定需?

`MBBindingList&lt;T&gt;

`（位?

`TaleWorlds.Library

`）；增删后必须触?

`OnPropertyChanged

`?
<!-- END DEV-USE-CASES -->

## 概述 / Overview

`ViewModel

` 是游?UI 数据绑定的抽象基类，实现?

`INotifyPropertyChanged

` 接口。它?Gauntlet UI 框架的核心，?UI 层提供数据绑定和命令执行能力。所?UI 相关?ViewModel 都应继承此类?

`ViewModel

` is the abstract base class for UI data binding in the game's MVVM pattern, implementing the 

`INotifyPropertyChanged

` interface. It is the core of the Gauntlet UI framework, providing data binding and command execution capabilities to the UI layer. All UI-related ViewModels should inherit from this class.

**注意**: 不存在单独的 

`TextViewModel

` ?

`BoolViewModel

` 类。基础类型通过 

`[DataSourceProperty]

` 标记?

`OnPropertyChangedWithValue&lt;T&gt;()

` 方法处理?

**Note**: There are no separate 

`TextViewModel

` or 

`BoolViewModel

` classes. Generic types are handled via the 

`[DataSourceProperty]

` attribute and 

`OnPropertyChangedWithValue&lt;T&gt;()

` method.

## 继承关系 / Inheritance Hierarchy

`

`

`
ViewModel (TaleWorlds.Library)
    └── IViewModel (interface)
    └── INotifyPropertyChanged (interface)
`

`

`

## 属性变更事?/ Property Changed Events

ViewModel 提供?8 种类型化的事件处理器，用于高效的类型特定属性变更通知?

\| Event \| Type \| Description \|
\|-------\|------\|-------------\|
\| PropertyChanged \| 

`PropertyChangedEventHandler

` \| 标准 INotifyPropertyChanged 事件 / Standard INotifyPropertyChanged event \|
\| PropertyChangedWithValue \| 

`PropertyChangedWithValueEventHandler

` \| 引用类型变更通知 / Reference type change notification \|
\| PropertyChangedWithBoolValue \| 

`PropertyChangedWithBoolValueEventHandler

` \| bool 类型变更通知 / bool type change notification \|
\| PropertyChangedWithIntValue \| 

`PropertyChangedWithIntValueEventHandler

` \| int 类型变更通知 / int type change notification \|
\| PropertyChangedWithFloatValue \| 

`PropertyChangedWithFloatValueEventHandler

` \| float 类型变更通知 / float type change notification \|
\| PropertyChangedWithUIntValue \| 

`PropertyChangedWithUIntValueEventHandler

` \| uint 类型变更通知 / uint type change notification \|
\| PropertyChangedWithColorValue \| 

`PropertyChangedWithColorValueEventHandler

` \| Color 类型变更通知 / Color type change notification \|
\| PropertyChangedWithDoubleValue \| 

`PropertyChangedWithDoubleValueEventHandler

` \| double 类型变更通知 / double type change notification \|
\| PropertyChangedWithVec2Value \| 

`PropertyChangedWithVec2ValueEventHandler

` \| Vec2 类型变更通知 / Vec2 type change notification \|

## 重要方法 / Important Methods

\| Method \| Signature \| Description \|
\|--------\|-----------\|-------------\|
\| OnPropertyChanged \| 

`public void OnPropertyChanged(string propertyName)

` \| 触发标准属性变更事?/ Trigger standard property changed event \|
\| OnPropertyChangedWithValue \| 

`public void OnPropertyChangedWithValue&lt;T&gt;(T value, string propertyName)

` \| 触发引用类型属性变?/ Trigger reference type property change \|
\| OnPropertyChangedWithValue \| 

`public void OnPropertyChangedWithValue(bool value, string propertyName)

` \| 触发 bool 属性变?/ Trigger bool property change \|
\| OnPropertyChangedWithValue \| 

`public void OnPropertyChangedWithValue(int value, string propertyName)

` \| 触发 int 属性变?/ Trigger int property change \|
\| OnPropertyChangedWithValue \| 

`public void OnPropertyChangedWithValue(float value, string propertyName)

` \| 触发 float 属性变?/ Trigger float property change \|
\| OnPropertyChangedWithValue \| 

`public void OnPropertyChangedWithValue(uint value, string propertyName)

` \| 触发 uint 属性变?/ Trigger uint property change \|
\| OnPropertyChangedWithValue \| 

`public void OnPropertyChangedWithValue(Color value, string propertyName)

` \| 触发 Color 属性变?/ Trigger Color property change \|
\| OnPropertyChangedWithValue \| 

`public void OnPropertyChangedWithValue(double value, string propertyName)

` \| 触发 double 属性变?/ Trigger double property change \|
\| OnPropertyChangedWithValue \| 

`public void OnPropertyChangedWithValue(Vec2 value, string propertyName)

` \| 触发 Vec2 属性变?/ Trigger Vec2 property change \|
\| SetField \| 

`protected bool SetField&lt;T&gt;(ref T field, T value, string propertyName)

` \| 安全地设置字段并触发通知 / Safely set field and trigger notification \|
\| ExecuteCommand \| 

`public void ExecuteCommand(string commandName, object[] parameters)

` \| 执行命名命令 / Execute named command \|
\| RefreshValues \| 

`public virtual void RefreshValues()

` \| 刷新所有绑定?/ Refresh all bound values \|
\| GetViewModelAtPath \| 

`public object GetViewModelAtPath(BindingPath path)

` \| 获取路径处的 ViewModel / Get ViewModel at path \|
\| OnFinalize \| 

`public virtual void OnFinalize()

` \| 清理资源 / Cleanup resources \|

## 标准属性声明模?/ Standard Property Declaration Pattern

`

`

`csharp
// 定义私有字段
// Define private field
private string _myProperty = "";

// 使用 [DataSourceProperty] 标记的属?
// Property marked with [DataSourceProperty]
[DataSourceProperty]
public string MyProperty
{
    get =&gt; this._myProperty;
    set
    {
        // 使用 OnPropertyChangedWithValue 进行类型化通知
        // Use OnPropertyChangedWithValue for typed notification
        if (value != this._myProperty)
        {
            this._myProperty = value;
            base.OnPropertyChangedWithValue&lt;string&gt;(value, "MyProperty");
        }
    }
}

// Bool 类型示例
// Bool type example
[DataSourceProperty]
public bool IsEnabled
{
    get =&gt; this._isEnabled;
    set
    {
        if (value != this._isEnabled)
        {
            this._isEnabled = value;
            base.OnPropertyChangedWithValue(value, "IsEnabled");
        }
    }
}
`

`

`

## 使用示例 / Usage Example

`

`

`csharp
using TaleWorlds.Library;

public class MyViewModel : ViewModel
{
    private string _name = "";
    private int _count = 0;
    private bool _isActive = false;

    public MyViewModel()
    {
    }

    // 刷新值方?- 子类可重?
    // Refresh values - overridable by subclasses
    public override void RefreshValues()
    {
        base.RefreshValues();
        // 重新计算并通知所有属?
        // Recalculate and notify all properties
    }

    [DataSourceProperty]
    public string Name
    {
        get =&gt; this._name;
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
        get =&gt; this._count;
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
        get =&gt; this._isActive;
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
`

`

`

## ?Gauntlet UI 的绑?/ Binding with Gauntlet UI

ViewModel 通过 

`[DataSourceProperty]

` 属性与 Gauntlet UI 绑定。代码生成器会扫描所有标记的属性，并将它们暴露?UI 层?

ViewModels bind to Gauntlet UI through the 

`[DataSourceProperty]

` attribute. The code generator scans all marked properties and exposes them to the UI layer.

## 注意事项 / Notes

- 所?UI 绑定?ViewModel 必须继承 

`ViewModel

`
- All UI-bound ViewModels must inherit from 

`ViewModel

`
- 使用 

`[DataSourceProperty]

` 标记所有需要绑定到 UI 的属?
- Mark all properties that need to bind to UI with 

`[DataSourceProperty]

`
- 优先使用类型?

`OnPropertyChangedWithValue

` 方法以获得更好的性能
- Prefer typed 

`OnPropertyChangedWithValue

` methods for better performance
- 

`SetField&lt;T&gt;

` 方法提供了一种简洁的安全更新模式
- 

`SetField&lt;T&gt;

` method provides a concise safe update pattern
- 不要存在单独?

`BoolViewModel

` ?

`TextViewModel

` ?
- There are no separate 

`BoolViewModel

` or 

`TextViewModel

` classes
