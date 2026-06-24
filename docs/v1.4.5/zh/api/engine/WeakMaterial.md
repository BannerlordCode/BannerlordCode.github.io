<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeakMaterial`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WeakMaterial

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WeakMaterial`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/WeakMaterial.cs`

## 概述

`WeakMaterial` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |
| `Name` | `public string Name { get; set; }` |

## 主要方法

### GetShader
`public Shader GetShader()`

**用途 / Purpose:** 获取 `shader` 的当前值。

### GetShaderFlags
`public ulong GetShaderFlags()`

**用途 / Purpose:** 获取 `shader flags` 的当前值。

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry)`

**用途 / Purpose:** 设置 `shader flags` 的值或状态。

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x, float y, float z, float w)`

**用途 / Purpose:** 设置 `mesh vector argument` 的值或状态。

### SetTexture
`public void SetTexture(Material.MBTextureType textureType, Texture texture)`

**用途 / Purpose:** 设置 `texture` 的值或状态。

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot, Texture texture)`

**用途 / Purpose:** 设置 `texture at slot` 的值或状态。

### SetAreaMapScale
`public void SetAreaMapScale(float scale)`

**用途 / Purpose:** 设置 `area map scale` 的值或状态。

### SetEnableSkinning
`public void SetEnableSkinning(bool enable)`

**用途 / Purpose:** 设置 `enable skinning` 的值或状态。

### UsingSkinning
`public bool UsingSkinning()`

**用途 / Purpose:** 处理 `using skinning` 相关逻辑。

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType)`

**用途 / Purpose:** 获取 `texture` 的当前值。

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot)`

**用途 / Purpose:** 获取 `texture with slot` 的当前值。

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string flagName, bool showErrors)`

**用途 / Purpose:** 向当前集合/状态中添加 `material shader flag`。

### RemoveMaterialShaderFlag
`public void RemoveMaterialShaderFlag(string flagName)`

**用途 / Purpose:** 从当前集合/状态中移除 `material shader flag`。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
var value = new WeakMaterial();
value.GetShader();
```

## 参见

- [完整类目录](../catalog)