# MBObjectBase / MBObjectBase

**Namespace**: TaleWorlds.ObjectSystem
**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectBase.cs`
**Purpose**: 所有游戏对象的基类，定义 StringId、反序列化和生命周期 / Base class for all game objects, defines StringId, deserialization, and lifecycle

## 概述 / Overview

`MBObjectBase` 是游戏中所有可注册对象的基础类。从 XML 加载的物品、角色、文化等都是 `MBObjectBase` 的子类。它定义了对象的核心属性，如 `StringId` 和 `Id`，以及反序列化模式。

`MBObjectBase` is the base class for all registerable objects in the game. Items, characters, cultures loaded from XML are all subclasses of `MBObjectBase`. It defines core properties like `StringId` and `Id`, as well as the deserialization pattern.

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| StringId | `string` | 字符串标识符，用于 XML 引用 / String identifier for XML references |
| Id | `MBGUID` | 全局唯一标识符 / Global unique identifier |
| IsInitialized | `bool` | 对象是否已初始化 / Whether object is initialized |
| IsReady | `bool` | 对象是否已就绪 / Whether object is ready |
| IsRegistered | `bool` | 对象是否已注册到 MBObjectManager / Whether object is registered to MBObjectManager |

## 重要方法 / Important Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Initialize | `public virtual void Initialize()` | 初始化对象，设置 IsInitialized = true / Initialize object, set IsInitialized = true |
| Deserialize | `public virtual void Deserialize(MBObjectManager objectManager, XmlNode node)` | 从 XML 反序列化对象，重写此方法解析自定义属性 / Deserialize from XML, override to parse custom properties |
| AfterInitialized | `public void AfterInitialized()` | 初始化完成后调用，设置 IsReady / Called after initialization, set IsReady |
| AfterRegister | `public virtual void AfterRegister()` | 注册到 MBObjectManager 后调用 / Called after registration to MBObjectManager |
| GetName | `public virtual TextObject GetName()` | 获取对象名称 / Get object name |

## 使用示例 / Usage Example

```csharp
// 定义自定义游戏对象
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
        
        // 读取自定义属性
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
```

## XML 示例 / XML Example

```xml
<MyCustomObjects>
    <MyCustomObject id="my_object_1" my_property="42" my_text="Hello World"/>
</MyCustomObjects>
```

## 生命周期 / Lifecycle

```
1. 构造函数调用 / Constructor called
2. Deserialize(objectManager, node) - 从 XML 加载数据 / Load data from XML
   - 调用 base.Deserialize() 设置 StringId / Call base.Deserialize() to set StringId
   - 解析自定义属性 / Parse custom properties
3. Initialize() - 设置 IsInitialized = true / Set IsInitialized = true
4. MBObjectManager.RegisterObject() - 注册到对象管理器 / Register to object manager
   - OnRegistered() - 设置 IsRegistered = true / Set IsRegistered = true
   - AfterRegister() - 可重写的钩子 / Overrideable hook
5. AfterInitialized() - 设置 IsReady = true / Set IsReady = true
```

## 注意事项 / Notes

- 所有游戏对象类都应该继承自 `MBObjectBase`
- All game object classes should inherit from `MBObjectBase`
- `StringId` 必须唯一，用于 XML 中的对象引用
- `StringId` must be unique, used for object references in XML
- 反序列化时先调用 `base.Deserialize()` 以确保 `StringId` 被正确设置
- Call `base.Deserialize()` first in Deserialize() to ensure `StringId` is set correctly
- 不要在构造函数中执行复杂逻辑，优先使用 `Initialize()` 或 `AfterRegister()`
- Do not perform complex logic in constructor, prefer `Initialize()` or `AfterRegister()`
