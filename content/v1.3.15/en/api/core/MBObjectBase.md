---
title: "MBObjectBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBObjectBase / MBObjectBase`
- [← Area / Back to core](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBObjectBase / MBObjectBase

## Mental Model

Treat `MBObjectBase` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace**: TaleWorlds.ObjectSystem
**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectBase.cs`
**Purpose**: Base class for all game objects, defines StringId, deserialization, and lifecycle / 所有游戏对象的基类，定义 StringId、反序列化和生命周期

## Overview / 概述

`MBObjectBase` is the base class for all registerable objects in the game. Items, characters, cultures loaded from XML are all subclasses of `MBObjectBase`. It defines core properties like `StringId` and `Id`, as well as the deserialization pattern.

`MBObjectBase` 是游戏中所有可注册对象的基础类。从 XML 加载的物品、角色、文化等都是 `MBObjectBase` 的子类。它定义了对象的核心属性，如 `StringId` 和 `Id`，以及反序列化模式。

## Developer Use Cases

### Use Case 1: Look up a registered object by StringId

**Scenario**: At runtime retrieve an item, character, etc. definition by its XML `id` string.

```csharp
ItemObject item = Game.Current.ObjectManager.GetObject<ItemObject>("northern_sword");
Hero template = Game.Current.ObjectManager.GetObject<Hero>("main_hero_template");
```

**Key points**: `GetObject<T>` is the type-safe lookup entry; returns `null` if not found — null-check before use; the generic `T` must be a type registered via `RegisterType`.

### Use Case 2: Override Deserialize to parse custom XML attributes

**Scenario**: A custom `MBObjectBase` subclass needs to read its own fields from XML.

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
{
    base.Deserialize(objectManager, node);  // must call first, sets StringId
    if (node.Attributes["my_property"] != null)
        MyProperty = Convert.ToInt32(node.Attributes["my_property"].Value);
}
```

**Key points**: Always call `base.Deserialize()` first — otherwise `StringId` is not set; `XmlNode` maps directly to the XML element; use `node.SelectSingleNode` for nested data.

### Use Case 3: Resolve cross-object references in AfterRegister

**Scenario**: During load, referenced objects may not yet be registered — defer reference resolution until all objects are ready.

```csharp
public override void AfterRegister()
{
    base.AfterRegister();
    // All objects are registered here — safe to look up references
    _referencedItem = Game.Current.ObjectManager.GetObject<ItemObject>(_itemId);
}
```

**Key points**: `AfterRegister` is called after the object is registered to the manager; all objects of the same type have finished `Deserialize` by then; cross-type reference resolution (e.g., an ItemObject referencing a CultureObject) belongs in `AfterInitialized`.

### Use Case 4: Reset runtime state in Initialize

**Scenario**: Re-initialize an object (reset caches, recompute derived fields).

```csharp
public override void Initialize()
{
    base.Initialize();  // sets IsInitialized = true
    _cachedValue = ComputeDerived();
}
```

**Key points**: `Initialize` sets `IsInitialized = true`; put derived-field computation here rather than the constructor, because `Deserialize` has finished and properties are populated by then; always call `base.Initialize()` when overriding.

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| StringId | `string` | String identifier for XML references / 字符串标识符，用于 XML 引用 |
| Id | `MBGUID` | Global unique identifier / 全局唯一标识符 |
| IsInitialized | `bool` | Whether object is initialized / 对象是否已初始化 |
| IsReady | `bool` | Whether object is ready / 对象是否已就绪 |
| IsRegistered | `bool` | Whether object is registered to MBObjectManager / 对象是否已注册到 MBObjectManager |

## Important Methods / 重要方法

| Method | Signature | Description |
|--------|-----------|-------------|
| Initialize | `public virtual void Initialize()` | Initialize object, set IsInitialized = true / 初始化对象，设置 IsInitialized = true |
| Deserialize | `public virtual void Deserialize(MBObjectManager objectManager, XmlNode node)` | Deserialize from XML, override to parse custom properties / 从 XML 反序列化对象，重写此方法解析自定义属性 |
| AfterInitialized | `public void AfterInitialized()` | Called after initialization, set IsReady / 初始化完成后调用，设置 IsReady |
| AfterRegister | `public virtual void AfterRegister()` | Called after registration to MBObjectManager / 注册到 MBObjectManager 后调用 |
| GetName | `public virtual TextObject GetName()` | Get object name / 获取对象名称 |

## Usage Example / 使用示例

```csharp
// Define custom game object
// 定义自定义游戏对象
public class MyCustomObject : MBObjectBase
{
    public int MyProperty { get; set; }
    public string MyText { get; set; }

    // Override Deserialize to parse XML
    // 重写反序列化方法解析 XML
    public override void Deserialize(MBObjectManager objectManager, XmlNode node)
    {
        base.Deserialize(objectManager, node);
        
        // Read custom properties
        // 读取自定义属性
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
```

## XML Example / XML 示例

```xml
<MyCustomObjects>
    <MyCustomObject id="my_object_1" my_property="42" my_text="Hello World"/>
</MyCustomObjects>
```

## Lifecycle / 生命周期

```
1. Constructor called / 构造函数调用
2. Deserialize(objectManager, node) - Load data from XML / 从 XML 加载数据
   - Call base.Deserialize() to set StringId / 调用 base.Deserialize() 设置 StringId
   - Parse custom properties / 解析自定义属性
3. Initialize() - Set IsInitialized = true / 设置 IsInitialized = true
4. MBObjectManager.RegisterObject() - Register to object manager / 注册到对象管理器
   - OnRegistered() - Set IsRegistered = true / 设置 IsRegistered = true
   - AfterRegister() - Overrideable hook / 可重写的钩子
5. AfterInitialized() - Set IsReady = true / 设置 IsReady = true
```

## Notes / 注意事项

- All game object classes should inherit from `MBObjectBase`
- 所有游戏对象类都应该继承自 `MBObjectBase`
- `StringId` must be unique, used for object references in XML
- `StringId` 必须唯一，用于 XML 中的对象引用
- Call `base.Deserialize()` first in Deserialize() to ensure `StringId` is set correctly
- 反序列化时先调用 `base.Deserialize()` 以确保 `StringId` 被正确设置
- Do not perform complex logic in constructor, prefer `Initialize()` or `AfterRegister()`
- 不要在构造函数中执行复杂逻辑，优先使用 `Initialize()` 或 `AfterRegister()`
