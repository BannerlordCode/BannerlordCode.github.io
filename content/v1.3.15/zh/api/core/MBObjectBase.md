---
title: "MBObjectBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBObjectBase / MBObjectBase`
- [← 本领域 / 返回 core](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBObjectBase / MBObjectBase

## 心智模型

先把 `MBObjectBase` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.ObjectSystem
**File**: 

`bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectBase.cs

`
**Purpose**: 所有游戏对象的基类，定?StringId、反序列化和生命周期 / Base class for all game objects, defines StringId, deserialization, and lifecycle

## 概述 / Overview

`MBObjectBase

` 是游戏中所有可注册对象的基础类。从 XML 加载的物品、角色、文化等都是 

`MBObjectBase

` 的子类。它定义了对象的核心属性，?

`StringId

` ?

`Id

`，以及反序列化模式?

`MBObjectBase

` is the base class for all registerable objects in the game. Items, characters, cultures loaded from XML are all subclasses of 

`MBObjectBase

`. It defines core properties like 

`StringId

` and 

`Id

`, as well as the deserialization pattern.

## 开发用?/ Developer Use Cases

### 用例 1: 通过 StringId 查询已注册对?

**场景**: 在运行时?XML 中的 

`id

` 字符串取回物品、角色等定义?

`

`

`csharp
ItemObject item = Game.Current.ObjectManager.GetObject&lt;ItemObject&gt;("northern_sword");
Hero template = Game.Current.ObjectManager.GetObject&lt;Hero&gt;("main_hero_template");
`

`

`

**要点**: 

`GetObject&lt;T&gt;

` 是类型安全的查询入口；找不到返回 

`null

`，使用前应判空；泛型 

`T

` 必须是已通过 

`RegisterType

` 登记的类型?

### 用例 2: 重写 Deserialize 解析自定?XML 属?

**场景**: 自定?

`MBObjectBase

` 子类需要从 XML 读取自己的字段?

`

`

`csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
{
    base.Deserialize(objectManager, node);  // 必须先调用，设置 StringId
    if (node.Attributes["my_property"] != null)
        MyProperty = Convert.ToInt32(node.Attributes["my_property"].Value);
}
`

`

`

**要点**: 必须先调?

`base.Deserialize()

`，否?

`StringId

` 不会被设置；

`XmlNode

` 直接对应 XML 节点，复杂数据用 

`node.SelectSingleNode

`?

### 用例 3: ?AfterRegister 做对象间引用解析

**场景**: 加载阶段对象可能尚未注册，需要等所有对象就绪后再解析引用?

`

`

`csharp
public override void AfterRegister()
{
    base.AfterRegister();
    // 此时所有对象都已注册，可安全查询引?
    _referencedItem = Game.Current.ObjectManager.GetObject&lt;ItemObject&gt;(_itemId);
}
`

`

`

**要点**: 

`AfterRegister

` 在对象注册到管理器后调用，所有同类型对象?

`Deserialize

` 已完成；跨类型引用解析（?ItemObject 引用 CultureObject）建议放?

`AfterInitialized

`?

### 用例 4: ?Initialize 重置运行时状?

**场景**: 重新初始化对象（如重置缓存、重算派生字段）?

`

`

`csharp
public override void Initialize()
{
    base.Initialize();  // 设置 IsInitialized = true
    _cachedValue = ComputeDerived();
}
`

`

`

**要点**: 

`Initialize

` 设置 

`IsInitialized = true

`；派生字段计算放这里而非构造函数，因为此时 

`Deserialize

` 已完成、属性已就位；重写后必须调用 

`base.Initialize()

`?

## 重要属?/ Important Properties

\| Property \| Type \| Description \|
\|----------\|------\|-------------\|
\| StringId \| 

`string

` \| 字符串标识符，用?XML 引用 / String identifier for XML references \|
\| Id \| 

`MBGUID

` \| 全局唯一标识?/ Global unique identifier \|
\| IsInitialized \| 

`bool

` \| 对象是否已初始化 / Whether object is initialized \|
\| IsReady \| 

`bool

` \| 对象是否已就?/ Whether object is ready \|
\| IsRegistered \| 

`bool

` \| 对象是否已注册到 MBObjectManager / Whether object is registered to MBObjectManager \|

## 重要方法 / Important Methods

\| Method \| Signature \| Description \|
\|--------\|-----------\|-------------\|
\| Initialize \| 

`public virtual void Initialize()

` \| 初始化对象，设置 IsInitialized = true / Initialize object, set IsInitialized = true \|
\| Deserialize \| 

`public virtual void Deserialize(MBObjectManager objectManager, XmlNode node)

` \| ?XML 反序列化对象，重写此方法解析自定义属?/ Deserialize from XML, override to parse custom properties \|
\| AfterInitialized \| 

`public void AfterInitialized()

` \| 初始化完成后调用，设?IsReady / Called after initialization, set IsReady \|
\| AfterRegister \| 

`public virtual void AfterRegister()

` \| 注册?MBObjectManager 后调?/ Called after registration to MBObjectManager \|
\| GetName \| 

`public virtual TextObject GetName()

` \| 获取对象名称 / Get object name \|

## 使用示例 / Usage Example

`

`

`csharp
// 定义自定义游戏对?
// Define custom game object
public class MyCustomObject : MBObjectBase
{
    public int MyProperty { get; set; }
    public string MyText { get; set; }

    // 重写反序列化方法解析 XML
    // Override Deserialize to parse XML
    public override void Deserialize(MBObjectManager objectManager, XmlNode node)
    {
        base.Deserialize(objectManager, node);
        
        // 读取自定义属?
        // Read custom properties
        if (node.Attributes["my_property"] != null)
        {
            MyProperty = Convert.ToInt32(node.Attributes["my_property"].Value);
        }
        
        if (node.Attributes["my_text"] != null)
        {
            MyText = node.Attributes["my_text"].Value;
        }
    }
}
`

`

`

## XML 示例 / XML Example

`

`

`xml
&lt;MyCustomObjects&gt;
    &lt;MyCustomObject id="my_object_1" my_property="42" my_text="Hello World"/&gt;
&lt;/MyCustomObjects&gt;
`

`

`

## 生命周期 / Lifecycle

`

`

`
1. 构造函数调?/ Constructor called
2. Deserialize(objectManager, node) - ?XML 加载数据 / Load data from XML
   - 调用 base.Deserialize() 设置 StringId / Call base.Deserialize() to set StringId
   - 解析自定义属?/ Parse custom properties
3. Initialize() - 设置 IsInitialized = true / Set IsInitialized = true
4. MBObjectManager.RegisterObject() - 注册到对象管理器 / Register to object manager
   - OnRegistered() - 设置 IsRegistered = true / Set IsRegistered = true
   - AfterRegister() - 可重写的钩子 / Overrideable hook
5. AfterInitialized() - 设置 IsReady = true / Set IsReady = true
`

`

`

## 注意事项 / Notes

- 所有游戏对象类都应该继承自 

`MBObjectBase

`
- All game object classes should inherit from 

`MBObjectBase

`
- 

`StringId

` 必须唯一，用?XML 中的对象引用
- 

`StringId

` must be unique, used for object references in XML
- 反序列化时先调用 

`base.Deserialize()

` 以确?

`StringId

` 被正确设?
- Call 

`base.Deserialize()

` first in Deserialize() to ensure 

`StringId

` is set correctly
- 不要在构造函数中执行复杂逻辑，优先使?

`Initialize()

` ?

`AfterRegister()

`
- Do not perform complex logic in constructor, prefer 

`Initialize()

` or 

`AfterRegister()

`
