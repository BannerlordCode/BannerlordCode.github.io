---
title: "Shader"
description: "Shader: a public class in TaleWorlds.TwoDimension.Standalone; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/Shader.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Shader

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class Shader`
**File:** `TaleWorlds.TwoDimension.Standalone/Shader.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

Shader lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/Shader.cs. It is a public class; the inheritance chain is Shader. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Shader lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone`, inheritance chain Shader. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/Shader.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateShader` | `public static Shader CreateShader(GraphicsContext graphicsContext, string vertexShaderCode, string fragmentShaderCode)` | method |
| `CompileShaders` | `public static int CompileShaders(string vertexShaderCode, string fragmentShaderCode)` | method |
| `SetTexture` | `public void SetTexture(string name, OpenGLTexture texture)` | method |
| `SetColor` | `public void SetColor(string name, Color color)` | method |
| `Use` | `public void Use()` | method |
| `StopUsing` | `public void StopUsing()` | method |
| `SetMatrix` | `public void SetMatrix(string name, in Matrix4x4 matrix)` | method |
| `SetBoolean` | `public void SetBoolean(string name, bool value)` | method |
| `SetFloat` | `public void SetFloat(string name, float value)` | method |
| `SetVector2` | `public void SetVector2(string name, Vector2 value)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FrameworkDomain](../FrameworkDomain/)
- [same namespace GraphicsContext](../GraphicsContext/)
- [same namespace GraphicsForm](../GraphicsForm/)
- [same namespace IMessageCommunicator](../IMessageCommunicator/)
